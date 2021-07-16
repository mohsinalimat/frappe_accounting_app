
function on_add_to_cart_click() {
    frappe.call({
        method: "frappe_accounting_app.frappe_accounting_app.doctype.item.item.add_item_to_cart",
        args: {
            "item_code": '{{ doc.item_code }}',
        }
    })
}

function on_view_cart_click() {
    console.log('view cart clicked {{ doc.item_code}}')
}

