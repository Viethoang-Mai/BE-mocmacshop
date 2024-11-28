"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("products", [
            {
                name: "Artisan Necklaces 01",
                category_id: 1,
                price: 186,
                description:
                    "Immerse yourself in the vibrant beauty of the Greek islands with the exquisite Amalia Necklace.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676337/artisan-necklaces-1_bkqmxt.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Artisan Necklaces 02",
                category_id: 1,
                price: 92,
                description:
                    "Immerse yourself in the vibrant beauty of the Greek islands with the exquisite Amalia Necklace.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676337/artisan-necklaces-2_rmf2f8.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Artisan Necklaces 03",
                category_id: 1,
                price: 75,
                description:
                    "Immerse yourself in the vibrant beauty of the Greek islands with the exquisite Amalia Necklace.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676336/artisan-necklaces-3_pkzbny.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Artisan Necklaces 04",
                category_id: 1,
                price: 175,
                description:
                    "Immerse yourself in the vibrant beauty of the Greek islands with the exquisite Amalia Necklace.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676338/artisan-necklaces-4_sorloa.avif",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Artisan Necklaces 05",
                category_id: 1,
                price: 120,
                description:
                    "Immerse yourself in the vibrant beauty of the Greek islands with the exquisite Amalia Necklace.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676341/artisan-necklaces-5_td7lwf.avif",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Artisan Necklaces 06",
                category_id: 1,
                price: 201,
                description:
                    "Immerse yourself in the vibrant beauty of the Greek islands with the exquisite Amalia Necklace.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676339/artisan-necklaces-6_prong8.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Artisan Necklaces 07",
                category_id: 1,
                price: 86,
                description:
                    "Immerse yourself in the vibrant beauty of the Greek islands with the exquisite Amalia Necklace.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676340/artisan-necklaces-7_s1e7tu.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Artisan Necklaces 08",
                category_id: 1,
                price: 163,
                description:
                    "Immerse yourself in the vibrant beauty of the Greek islands with the exquisite Amalia Necklace.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676340/artisan-necklaces-8_d5j3nx.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Artisan Necklaces 09",
                category_id: 1,
                price: 68,
                description:
                    "Immerse yourself in the vibrant beauty of the Greek islands with the exquisite Amalia Necklace.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676342/artisan-necklaces-9_wb9iqx.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Artisan Necklaces 10",
                category_id: 1,
                price: 175,
                description:
                    "Immerse yourself in the vibrant beauty of the Greek islands with the exquisite Amalia Necklace.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676343/artisan-necklaces-10_mlpooz.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },

            {
                name: "Handmade Bracelets 01",
                category_id: 2,
                price: 15,
                description:
                    "These waterproof fishtail bracelets are the perfect accessory! They are completely handmade by me.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676363/handmade-bracelets-1_vcucfe.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Bracelets 02",
                category_id: 2,
                price: 12,
                description:
                    "These waterproof fishtail bracelets are the perfect accessory! They are completely handmade by me.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676364/handmade-bracelets-2_tbl3iv.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Bracelets 03",
                category_id: 2,
                price: 13,
                description:
                    "These waterproof fishtail bracelets are the perfect accessory! They are completely handmade by me.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676365/handmade-bracelets-3_m3grvr.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Bracelets 04",
                category_id: 2,
                price: 15,
                description:
                    "These waterproof fishtail bracelets are the perfect accessory! They are completely handmade by me.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676366/handmade-bracelets-4_xl4ran.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Bracelets 06",
                category_id: 2,
                price: 20,
                description:
                    "These waterproof fishtail bracelets are the perfect accessory! They are completely handmade by me.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676368/handmade-bracelets-6_oryivv.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Bracelets 10",
                category_id: 2,
                price: 14,
                description:
                    "These waterproof fishtail bracelets are the perfect accessory! They are completely handmade by me.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676373/handmade-bracelets-10_xcgl7z.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Bracelets 09",
                category_id: 2,
                price: 15,
                description:
                    "These waterproof fishtail bracelets are the perfect accessory! They are completely handmade by me.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676372/handmade-bracelets-9_xcncwq.png",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Bracelets 11",
                category_id: 2,
                price: 22,
                description:
                    "These waterproof fishtail bracelets are the perfect accessory! They are completely handmade by me.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676374/handmade-bracelets-11_foints.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Ceramics 01",
                category_id: 3,
                price: 18,
                description:
                    "Handmade mugs are earthy and comforting. But that doesn’t mean they have to be dull and boring. Our Essential Jumbo Mug marries minimalist design with vibrant, cheerful colors. ",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676396/handmade-ceramics-1_cjlvvj.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Ceramics 02",
                category_id: 3,
                price: 24,
                description:
                    "Handmade mugs are earthy and comforting. But that doesn’t mean they have to be dull and boring. Our Essential Jumbo Mug marries minimalist design with vibrant, cheerful colors. ",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676383/handmade-ceramics-2_ihw0vv.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Ceramics 03",
                category_id: 3,
                price: 26,
                description:
                    "Handmade mugs are earthy and comforting. But that doesn’t mean they have to be dull and boring. Our Essential Jumbo Mug marries minimalist design with vibrant, cheerful colors. ",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676384/handmade-ceramics-3_e3ddrt.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Ceramics 04",
                category_id: 3,
                price: 26,
                description:
                    "Handmade mugs are earthy and comforting. But that doesn’t mean they have to be dull and boring. Our Essential Jumbo Mug marries minimalist design with vibrant, cheerful colors. ",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676385/handmade-ceramics-4_a140uh.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Ceramics 06",
                category_id: 3,
                price: 32,
                description:
                    "Handmade mugs are earthy and comforting. But that doesn’t mean they have to be dull and boring. Our Essential Jumbo Mug marries minimalist design with vibrant, cheerful colors. ",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676387/handmade-ceramics-6_tqg1ne.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Ceramics 10",
                category_id: 3,
                price: 22,
                description:
                    "Handmade mugs are earthy and comforting. But that doesn’t mean they have to be dull and boring. Our Essential Jumbo Mug marries minimalist design with vibrant, cheerful colors. ",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676392/handmade-ceramics-10_n4xtto.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Ceramics 11",
                category_id: 3,
                price: 20,
                description:
                    "Handmade mugs are earthy and comforting. But that doesn’t mean they have to be dull and boring. Our Essential Jumbo Mug marries minimalist design with vibrant, cheerful colors. ",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676393/handmade-ceramics-11_ow5zyy.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Ceramics 12",
                category_id: 3,
                price: 68,
                description:
                    "Handmade mugs are earthy and comforting. But that doesn’t mean they have to be dull and boring. Our Essential Jumbo Mug marries minimalist design with vibrant, cheerful colors. ",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676394/handmade-ceramics-12_imi4u8.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Knitted Items 01",
                category_id: 4,
                price: 120,
                description:
                    "Looking for the warmest socks for a loved one? Look no further! A great choice for a present or just a small gift… to yourself.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676430/handmade-knitted-items-1_fzvzsj.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Knitted Items 02",
                category_id: 4,
                price: 50,
                description:
                    "Looking for the warmest socks for a loved one? Look no further! A great choice for a present or just a small gift… to yourself.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676430/handmade-knitted-items-2_fhcjca.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Knitted Items 03",
                category_id: 4,
                price: 12,
                description:
                    "Looking for the warmest socks for a loved one? Look no further! A great choice for a present or just a small gift… to yourself.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676432/handmade-knitted-items-3_mz5h3u.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Knitted Items 04",
                category_id: 4,
                price: 80,
                description:
                    "Looking for the warmest socks for a loved one? Look no further! A great choice for a present or just a small gift… to yourself.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676433/handmade-knitted-items-4_qjrykq.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Knitted Items 05",
                category_id: 4,
                price: 90,
                description:
                    "Looking for the warmest socks for a loved one? Look no further! A great choice for a present or just a small gift… to yourself.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676406/handmade-knitted-items-5_lkmcsl.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Knitted Items 19",
                category_id: 4,
                price: 92,
                description:
                    "Looking for the warmest socks for a loved one? Look no further! A great choice for a present or just a small gift… to yourself.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676429/handmade-knitted-items-19_endij2.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Knitted Items 18",
                category_id: 4,
                price: 110,
                description:
                    "Looking for the warmest socks for a loved one? Look no further! A great choice for a present or just a small gift… to yourself.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676423/handmade-knitted-items-18_lrzg26.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Knitted Items 08",
                category_id: 4,
                price: 69,
                description:
                    "Looking for the warmest socks for a loved one? Look no further! A great choice for a present or just a small gift… to yourself.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676410/handmade-knitted-items-8_jwwxin.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Knitted Items 20",
                category_id: 4,
                price: 48,
                description:
                    "Looking for the warmest socks for a loved one? Look no further! A great choice for a present or just a small gift… to yourself.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676435/handmade-knitted-items-20_krd8it.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wicker Crafts 01",
                category_id: 5,
                price: 52,
                description:
                    "We made large golden sun decor for you with great love! Golden sun wall hanging - really awesome boho decor or nursery decor",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676454/wicker-crafts-1_yh5vmu.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wicker Crafts 10",
                category_id: 5,
                price: 48,
                description:
                    "We made large golden sun decor for you with great love! Golden sun wall hanging - really awesome boho decor or nursery decor",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676451/wicker-crafts-10_udsqpu.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wicker Crafts 0",
                category_id: 5,
                price: 48,
                description:
                    "We made large golden sun decor for you with great love! Golden sun wall hanging - really awesome boho decor or nursery decor",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676445/wicker-crafts-3_gvmzjm.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wicker Crafts 04",
                category_id: 5,
                price: 48,
                description:
                    "We made large golden sun decor for you with great love! Golden sun wall hanging - really awesome boho decor or nursery decor",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676455/wicker-crafts-4_yezgds.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wicker Crafts 05",
                category_id: 5,
                price: 36,
                description:
                    "We made large golden sun decor for you with great love! Golden sun wall hanging - really awesome boho decor or nursery decor",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676447/wicker-crafts-5_w1at95.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wicker Crafts 06",
                category_id: 5,
                price: 48,
                description:
                    "We made large golden sun decor for you with great love! Golden sun wall hanging - really awesome boho decor or nursery decor",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676452/wicker-crafts-6_lflyim.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wicker Crafts 07",
                category_id: 5,
                price: 50,
                description:
                    "We made large golden sun decor for you with great love! Golden sun wall hanging - really awesome boho decor or nursery decor",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676457/wicker-crafts-7_baahb7.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wooden Miniatures 01",
                category_id: 6,
                price: 28,
                description:
                    "This DIY dollhouse kit makes a great craft project and gift for both children and collectors! This dollhouse features a very detailed interior design with lights that lighten this dollhouse in the dark.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676466/wooden-miniatures-1_jmetp1.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wooden Miniatures 02",
                category_id: 6,
                price: 19,
                description:
                    "This DIY dollhouse kit makes a great craft project and gift for both children and collectors! This dollhouse features a very detailed interior design with lights that lighten this dollhouse in the dark.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676483/wooden-miniatures-2_sztlpc.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wooden Miniatures 03",
                category_id: 6,
                price: 48,
                description:
                    "This DIY dollhouse kit makes a great craft project and gift for both children and collectors! This dollhouse features a very detailed interior design with lights that lighten this dollhouse in the dark.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676467/wooden-miniatures-3_ctlewn.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wooden Miniatures 04",
                category_id: 6,
                price: 10,
                description:
                    "This DIY dollhouse kit makes a great craft project and gift for both children and collectors! This dollhouse features a very detailed interior design with lights that lighten this dollhouse in the dark.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676469/wooden-miniatures-4_wcqpfb.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wooden Miniatures 06",
                category_id: 6,
                price: 40,
                description:
                    "This DIY dollhouse kit makes a great craft project and gift for both children and collectors! This dollhouse features a very detailed interior design with lights that lighten this dollhouse in the dark.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676470/wooden-miniatures-5_yjwn7d.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wooden Miniatures 07",
                category_id: 6,
                price: 24,
                description:
                    "This DIY dollhouse kit makes a great craft project and gift for both children and collectors! This dollhouse features a very detailed interior design with lights that lighten this dollhouse in the dark.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676474/wooden-miniatures-7_z1lk2v.jpg",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wooden Miniatures 10",
                category_id: 6,
                price: 28,
                description:
                    "This DIY dollhouse kit makes a great craft project and gift for both children and collectors! This dollhouse features a very detailed interior design with lights that lighten this dollhouse in the dark.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676479/wooden-miniatures-10_bq4fml.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wooden Miniatures 09",
                category_id: 6,
                price: 12,
                description:
                    "This DIY dollhouse kit makes a great craft project and gift for both children and collectors! This dollhouse features a very detailed interior design with lights that lighten this dollhouse in the dark.",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676478/wooden-miniatures-9_xmfxsq.webp",
                stock: 1000,
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("products", null, {});
        await queryInterface.sequelize.query(
            `TRUNCATE TABLE products RESTART IDENTITY CASCADE`
        );
    },
};
