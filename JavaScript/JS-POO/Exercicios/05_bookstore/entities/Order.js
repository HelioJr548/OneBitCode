class Order {
	#total;
	#items;
	#user;

	constructor(items, user) {
		items.forEach((product, quantity) => {
			if (quantity > product.inStock) {
				throw new Error(`Quantidade insuficiente em estoque.`);
			}
		});

		this.#items = items;
		this.#user = user;
		this.#total = parseFloat(
			items
				.reduce(
					(sum, { product, quantity }) =>
						sum + product.price * quantity,
					0
				)
				.toFixed(2)
		);
	}

	get data() {
		return {
			items: this.#items,
			user: this.#user,
			total: this.#total,
		};
	}
}

module.exports = Order;
