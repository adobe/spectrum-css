/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const lunr = require("lunr");

class Lunr {
    data() {
        return {
            permalink: "index.json",
        };
    }

    async render({ collections }) {
        const pages = (collections.component ?? []).map(({ data }) => ({
            href: data?.permalink,
            name: data?.title,
            description: data?.description,
        }));
        const index = lunr(function () {
            this.ref("href");
            this.field("name", { boost: 10 });
            this.field("description");

            pages.forEach((p) => {
                this.add(p);
            }, this);
        });
        return JSON.stringify(index, null, 2);
    }
}

module.exports = Lunr;
