import frappe
from frappe import _

def get_context(context):
    if frappe.session.user == "Guest":
        frappe.throw(_("Log in to access this page."), frappe.PermissionError)

    context.company_name = frappe.get_all('Company')[0]['name']
    context.items = frappe.get_all('Item', fields=['image', 'name', 'standard_selling_rate'])
    return context