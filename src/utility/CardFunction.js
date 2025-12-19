// Removed import — localStorage is a browser global
// import localStorage from "local-storage";

export function localCard() {

    // load the cart
    const cart = localStorage.getItem("cart");

    if (cart != null) {
        return JSON.parse(cart);
    } else {
        return [];
    }
}

// find if the product already exists or not
export function addToCart(productId, qty) {
    const cart = localCard();

    const index = cart.findIndex(
        (item) => item.productId == productId // ✅ return the condition
    );

    if (index === -1) {
        cart.push(
            { productId,qty}
        );
    } else {
        const newQty = cart[index].qty + qty;
        if (newQty <= 0) {
            cart.splice(index,1);
        } else {
            cart[index].qty = newQty;
        }
    }

    saveCart(cart);
}

// save the cart
export function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function clearCart() {
    localStorage.removeItem("cart");
}
