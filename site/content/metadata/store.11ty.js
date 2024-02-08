class Store {
    data() {
        return {
            permalink: "store.json",
        };
    }

    render({ collections }) {
        const stores = {};
        for (const { data } of collections.component ?? []) {
            const component = data.component;
            if (!component || !data.permalink) continue;

            stores[data.permalink] = {
                href: data.permalink,
                name: data.title,
                component: component.package.name,
                description: component.description,
            };
        }

        return JSON.stringify(stores, null, 2);
    }
}

module.exports = Store;
