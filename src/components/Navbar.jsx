import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import axios from "axios";

const Navbar = forwardRef((props, ref) => {

    const [Categories, setCategories] = useState(
      [
        {
          "CatName": "Women",
          "CategoryValue": "ladies",
          "CategoriesArray": [
            {
              "CatName": "New Arrivals",
              "CategoryValue": "new-arrivals",
              "CategoriesArray": [
                {
                  "CatName": "View All",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "ladies_newarrivals_all",
                    "ladies_newarrivals"
                  ]
                },
                {
                  "CatName": "Clothes",
                  "CategoryValue": "clothes",
                  "tagCodes": [
                    "ladies_newarrivals_clothes",
                    "ladies_newarrivals_clothes"
                  ]
                },
                {
                  "CatName": "Dresses",
                  "CategoryValue": "dresses",
                  "tagCodes": [
                    "ladies_dresses",
                    "ladies_divided_dresses",
                    "ladies_dresses"
                  ]
                },
                {
                  "CatName": " Shoes & Accessories",
                  "CategoryValue": "shoes-accessories",
                  "tagCodes": [
                    "ladies_newarrivals_shoesacc"
                  ]
                },
                {
                  "CatName": "Swimwear",
                  "CategoryValue": "swimwear",
                  "tagCodes": [
                    "ladies_newarrivals_swimwear",
                    "ladies_newarrivals_swimwear"
                  ]
                },
                {
                  "CatName": "Underwear & Nightwear",
                  "CategoryValue": "underwear-nightwear",
                  "tagCodes": [
                    "ladies_newarrivals_underwear_nightwear",
                    "ladies_newarrivals_underwear_nightwear"
                  ]
                }
              ],
              "tagCodes": []
            },
            {
              "CatName": "Trending Now",
              "CategoryValue": "seasonal-trending",
              "CategoriesArray": [
                {
                  "CatName": "Spring shift",
                  "CategoryValue": "spring",
                  "tagCodes": [
                    "ladies_spring",
                    "ladies_spring"
                  ]
                },
                {
                  "CatName": "Trend edit",
                  "CategoryValue": "trend-concept",
                  "tagCodes": [
                    "ladies_trendconcept",
                    "ladies_trendconcept"
                  ]
                },
                {
                  "CatName": "Bright colours",
                  "CategoryValue": "colours",
                  "tagCodes": [
                    "ladies_colours",
                    "ladies_colours"
                  ]
                },
                {
                  "CatName": "Y2K fashion",
                  "CategoryValue": "y2k",
                  "tagCodes": [
                    "5035A_Divided",
                    "ladies_y2k",
                    "ladies_y2k"
                  ]
                },
                {
                  "CatName": "Floral prints",
                  "CategoryValue": "floral",
                  "tagCodes": [
                    "ladies_floral",
                    "MCAL_SGMY_S5_SS22_FLORAL",
                    "ladies_floral"
                  ]
                },
                {
                  "CatName": "Linen clothing",
                  "CategoryValue": "linen",
                  "tagCodes": [
                    "ladies_linen",
                    "ladies_linen"
                  ]
                }
              ],
              "tagCodes": []
            },
            {
              "CatName": "Shop by Product",
              "CategoryValue": "shop-by-product",
              "CategoriesArray": [
                {
                  "CatName": "View All",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "ladies_all"
                  ]
                },
                {
                  "CatName": "Tops",
                  "CategoryValue": "tops",
                  "CategoriesArray": [
                    {
                      "CatName": "Cut Out Tops",
                      "CategoryValue": "cut-out",
                      "tagCodes": [
                        "ladies_tops_cutout",
                        "ladies_tops_cutout"
                      ]
                    },
                    {
                      "CatName": "Bralette",
                      "CategoryValue": "bralette-tops",
                      "tagCodes": [
                        "ladies_tops_bralette",
                        "ladies_tops_bralette"
                      ]
                    },
                    {
                      "CatName": "Bandeau",
                      "CategoryValue": "tube-top",
                      "tagCodes": [
                        "ladies_tops_tube",
                        "ladies_tops_tube"
                      ]
                    },
                    {
                      "CatName": "Puff Sleeve",
                      "CategoryValue": "puff-sleeve",
                      "tagCodes": [
                        "ladies_tops_puffsleeve",
                        "ladies_tops_puffsleeve"
                      ]
                    },
                    {
                      "CatName": "Vests",
                      "CategoryValue": "vests",
                      "tagCodes": [
                        "ladies_tops_vests",
                        "ladies_tops_vests"
                      ]
                    },
                    {
                      "CatName": "Short sleeve",
                      "CategoryValue": "short-sleeve",
                      "tagCodes": [
                        "ladies_tops_shortsleeve",
                        "ladies_tops_shortsleeve"
                      ]
                    },
                    {
                      "CatName": "Long Sleeves",
                      "CategoryValue": "long-sleeve",
                      "tagCodes": [
                        "ladies_tops_longsleeve",
                        "ladies_tops_longsleeve"
                      ]
                    },
                    {
                      "CatName": "Cropped tops",
                      "CategoryValue": "cropped-tops",
                      "tagCodes": [
                        "ladies_tops_croppedtops",
                        "ladies_tops_croppedtops"
                      ]
                    },
                    {
                      "CatName": "Bodies",
                      "CategoryValue": "bodies",
                      "tagCodes": [
                        "ladies_tops_bodys",
                        "ladies_tops_bodys"
                      ]
                    },
                    {
                      "CatName": "T-shirts",
                      "CategoryValue": "t-shirts",
                      "tagCodes": [
                        "ladies_tops_tshirts",
                        "ladies_tops_tshirts"
                      ]
                    },
                    {
                      "CatName": "Graphic Tees & Printed T-Shirts",
                      "CategoryValue": "printed-t-shirts",
                      "tagCodes": [
                        "ladies_tops_printed_tshirts",
                        "ladies_tops_printed_tshirts"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_tops",
                    "ladies_tops"
                  ]
                },
                {
                  "CatName": "Dresses",
                  "CategoryValue": "dresses",
                  "CategoriesArray": [
                    {
                      "CatName": "Cami",
                      "CategoryValue": "cami-dresses",
                      "tagCodes": [
                        "ladies_dresses_camidresses",
                        "ladies_dresses_camidresses"
                      ]
                    },
                    {
                      "CatName": "Knitted dresses",
                      "CategoryValue": "knitted-dresses",
                      "tagCodes": [
                        "ladies_dresses_knitted",
                        "ladies_dresses_knitted"
                      ]
                    },
                    {
                      "CatName": "Denim Dresses",
                      "CategoryValue": "denim",
                      "tagCodes": [
                        "ladies_dresses_denim",
                        "ladies_dresses_denim"
                      ]
                    },
                    {
                      "CatName": "Short Dresses",
                      "CategoryValue": "short-dresses",
                      "tagCodes": [
                        "ladies_dresses_shortdresses",
                        "ladies_dresses_shortdresses"
                      ]
                    },
                    {
                      "CatName": "Midi Dresses",
                      "CategoryValue": "midi-dresses",
                      "tagCodes": [
                        "ladies_dresses_mididresses",
                        "ladies_dresses_mididresses"
                      ]
                    },
                    {
                      "CatName": "Maxi Dresses",
                      "CategoryValue": "maxi-dresses",
                      "tagCodes": [
                        "ladies_dresses_maxidresses",
                        "ladies_dresses_maxidresses"
                      ]
                    },
                    {
                      "CatName": "Bodycon Dresses",
                      "CategoryValue": "bodycon-dresses",
                      "tagCodes": [
                        "ladies_dresses_bodycon"
                      ]
                    },
                    {
                      "CatName": "Party Dresses",
                      "CategoryValue": "party-dresses",
                      "tagCodes": [
                        "ladies_dresses_party"
                      ]
                    },
                    {
                      "CatName": "Lace Dresses",
                      "CategoryValue": "lace-dresses",
                      "tagCodes": [
                        "ladies_dresses_lace",
                        "ladies_dresses_lace"
                      ]
                    },
                    {
                      "CatName": "Shirt Dresses",
                      "CategoryValue": "shirt-dresses",
                      "tagCodes": [
                        "ladies_dresses_shirt",
                        "ladies_dresses_shirt"
                      ]
                    },
                    {
                      "CatName": "Sequin Dresses",
                      "CategoryValue": "sequin-dresses",
                      "tagCodes": [
                        "ladies_dresses_sequin",
                        "ladies_dresses_sequin"
                      ]
                    },
                    {
                      "CatName": "Wrap Dresses",
                      "CategoryValue": "wrap-dress",
                      "tagCodes": [
                        "Ladies_dresses_wrap",
                        "Ladies_dress_wrap"
                      ]
                    },
                    {
                      "CatName": "Skater",
                      "CategoryValue": "skater-dresses",
                      "tagCodes": [
                        "ladies_dresses_aline",
                        "ladies_dresses_a-line dress"
                      ]
                    },
                    {
                      "CatName": "Jumper Dresses",
                      "CategoryValue": "jumper-dresses",
                      "tagCodes": [
                        "ladies_dresses_sweater",
                        "ladies_dresses_sweater"
                      ]
                    },
                    {
                      "CatName": "Kaftan Dresses",
                      "CategoryValue": "kaftan",
                      "tagCodes": [
                        "ladies_dresses_kaftan",
                        "ladies_dresses_kaftan"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_dresses",
                    "ladies_dresses"
                  ]
                },
                {
                  "CatName": "Basics",
                  "CategoryValue": "basics",
                  "CategoriesArray": [
                    {
                      "CatName": "Tops ",
                      "CategoryValue": "tops",
                      "CategoriesArray": [
                        {
                          "CatName": "Vests",
                          "CategoryValue": "vests",
                          "tagCodes": [
                            "ladies_basics_tops_vests",
                            "ladies_basics_tops_vests"
                          ]
                        },
                        {
                          "CatName": "Short Sleeve",
                          "CategoryValue": "short-sleeve",
                          "tagCodes": [
                            "ladies_basics_tops_shortsleeve",
                            "ladies_basics_tops_shortsleeve"
                          ]
                        },
                        {
                          "CatName": "Long Sleeve",
                          "CategoryValue": "long-sleeve",
                          "tagCodes": [
                            "ladies_basics_tops_longsleeve",
                            "ladies_basics_tops_longsleeve"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_basics_tops",
                        "ladies_basics_tops"
                      ]
                    },
                    {
                      "CatName": "Cardigans & Jumpers",
                      "CategoryValue": "cardigans-and-jumpers",
                      "tagCodes": [
                        "ladies_basics_cardigansjumpers",
                        "ladies_basics_cardigansjumpers"
                      ]
                    },
                    {
                      "CatName": "Dresses & Skirts",
                      "CategoryValue": "dresses-and-skirts",
                      "tagCodes": [
                        "ladies_basics_dressesskirts",
                        "ladies_basics_dressesskirts"
                      ]
                    },
                    {
                      "CatName": "Trousers & Leggings",
                      "CategoryValue": "trousers-and-leggings",
                      "tagCodes": [
                        "ladies_basics_trousersleggings",
                        "ladies_basics_trousersleggings"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_basics",
                    "ladies_basics"
                  ]
                },
                {
                  "CatName": "Loungewear",
                  "CategoryValue": "loungewear",
                  "tagCodes": [
                    "ladies_loungewear",
                    "ladies_loungewear"
                  ]
                },
                {
                  "CatName": "Shirts & Blouses ",
                  "CategoryValue": "shirts-and-blouses",
                  "CategoriesArray": [
                    {
                      "CatName": "Shirts",
                      "CategoryValue": "shirts",
                      "tagCodes": [
                        "ladies_shirtsblouses_shirts",
                        "ladies_shirtsblouses_shirts"
                      ]
                    },
                    {
                      "CatName": "Tunics ",
                      "CategoryValue": "tunics",
                      "tagCodes": [
                        "ladies_shirtsblouses_tunics",
                        "ladies_shirtsblouses_tunics"
                      ]
                    },
                    {
                      "CatName": "Off Shoulder Shirts & Blouses",
                      "CategoryValue": "off-shoulder",
                      "tagCodes": [
                        "ladies_shirtblouses_offshoulderblouses",
                        "ladies_shirtblouses_offshoulderblouses"
                      ]
                    },
                    {
                      "CatName": "Denim shirts",
                      "CategoryValue": "denim",
                      "tagCodes": [
                        "ladies_shirtsblouses_denimshirts",
                        "ladies_shirtsblouses_denimshirts"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_shirtsblouses",
                    "ladies_shirtsblouses"
                  ]
                },
                {
                  "CatName": "Sweatshirts & Hoodies",
                  "CategoryValue": "hoodies-sweatshirts",
                  "CategoriesArray": [
                    {
                      "CatName": "Hoodies",
                      "CategoryValue": "hoodies",
                      "tagCodes": [
                        "ladies_hoodiesswetshirts_hoodies",
                        "ladies_hoodiesswetshirts_hoodies"
                      ]
                    },
                    {
                      "CatName": "Sweatshirts",
                      "CategoryValue": "sweatshirts",
                      "tagCodes": [
                        "ladies_hoodiesswetshirts_sweatshirts",
                        "ladies_hoodiesswetshirts_sweatshirts"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_hoodiessweatshirts",
                    "ladies_hoodiessweatshirts"
                  ]
                },
                {
                  "CatName": "Trousers",
                  "CategoryValue": "trousers",
                  "CategoriesArray": [
                    {
                      "CatName": "Wide Leg Trousers",
                      "CategoryValue": "wide-leg",
                      "tagCodes": [
                        "ladies_trousers_wideleg",
                        "ladies_trousers_wideleg"
                      ]
                    },
                    {
                      "CatName": "Paperbag Trousers",
                      "CategoryValue": "paperbag",
                      "tagCodes": [
                        "ladies_trousers_paperbag",
                        "ladies_trousers_paperbag"
                      ]
                    },
                    {
                      "CatName": "High Waisted Trousers",
                      "CategoryValue": "high-waisted",
                      "tagCodes": [
                        "ladies_trousers_highwaisted",
                        "ladies_trousers_highwaisted"
                      ]
                    },
                    {
                      "CatName": "Cargo Trousers",
                      "CategoryValue": "cargo",
                      "tagCodes": [
                        "ladies_trousers_cargo",
                        "ladies_trousers_cargo"
                      ]
                    },
                    {
                      "CatName": "Leggings",
                      "CategoryValue": "leggings",
                      "tagCodes": [
                        "ladies_trousers_leggings",
                        "ladies_trousers_leggings"
                      ]
                    },
                    {
                      "CatName": "Joggers",
                      "CategoryValue": "joggers",
                      "tagCodes": [
                        "ladies_trousers_joggers",
                        "ladies_trousers_joggers"
                      ]
                    },
                    {
                      "CatName": "Flared Trousers",
                      "CategoryValue": "flare",
                      "tagCodes": [
                        "ladies_trousers_flare",
                        "ladies_trousers_flare"
                      ]
                    },
                    {
                      "CatName": "Chinos & Slacks",
                      "CategoryValue": "chinos-slacks",
                      "tagCodes": [
                        "ladies_trousers_chinosslacks",
                        "ladies_trousers_chinosslacks"
                      ]
                    },
                    {
                      "CatName": "Culottes",
                      "CategoryValue": "culottes",
                      "tagCodes": [
                        "ladies_trousers_culottes",
                        "ladies_trousers_culottes"
                      ]
                    },
                    {
                      "CatName": "Smart Trousers",
                      "CategoryValue": "smart-trousers",
                      "tagCodes": [
                        "ladies_trousers_dressed"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_trousers",
                    "ladies_trousers"
                  ]
                },
                {
                  "CatName": "Jeans",
                  "CategoryValue": "jeans",
                  "CategoriesArray": [
                    {
                      "CatName": "Wide Leg Jeans",
                      "CategoryValue": "wide-leg",
                      "tagCodes": [
                        "ladies_jeans_wide",
                        "ladies_jeans_wide"
                      ]
                    },
                    {
                      "CatName": "Skinny",
                      "CategoryValue": "skinny",
                      "tagCodes": [
                        "ladies_jeans_skinny",
                        "ladies_jeans_skinny"
                      ]
                    },
                    {
                      "CatName": "Shaping Jeans",
                      "CategoryValue": "shaping",
                      "tagCodes": [
                        "ladies_jeans_shaping",
                        "ladies_jeans_shaping"
                      ]
                    },
                    {
                      "CatName": "Straight Jeans",
                      "CategoryValue": "straight",
                      "tagCodes": [
                        "ladies_jeans_straight",
                        "ladies_jeans_straight"
                      ]
                    },
                    {
                      "CatName": "Bootcut",
                      "CategoryValue": "bootcut",
                      "tagCodes": [
                        "ladies_jeans_bootcut",
                        "ladies_jeans_bootcut"
                      ]
                    },
                    {
                      "CatName": "Flare",
                      "CategoryValue": "flare",
                      "tagCodes": [
                        "ladies_jeans_flare",
                        "ladies_jeans_flare"
                      ]
                    },
                    {
                      "CatName": "Loose Jeans",
                      "CategoryValue": "loose",
                      "tagCodes": [
                        "ladies_jeans_loose",
                        "ladies_jeans_loose"
                      ]
                    },
                    {
                      "CatName": "Boyfriend",
                      "CategoryValue": "boyfriend",
                      "tagCodes": [
                        "ladies_jeans_boyfriend"
                      ]
                    },
                    {
                      "CatName": "Mom Jeans",
                      "CategoryValue": "mom",
                      "tagCodes": [
                        "ladies_jeans_mom"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_jeans"
                  ]
                },
                {
                  "CatName": "Skirts",
                  "CategoryValue": "skirts",
                  "CategoriesArray": [
                    {
                      "CatName": "Slip Skirts",
                      "CategoryValue": "slip",
                      "tagCodes": [
                        "ladies_skirts_slip",
                        "ladies_skirts_slip"
                      ]
                    },
                    {
                      "CatName": "Mini Skirts",
                      "CategoryValue": "mini",
                      "tagCodes": [
                        "ladies_skirts_mini",
                        "ladies_skirts_mini"
                      ]
                    },
                    {
                      "CatName": "Pleated Skirts",
                      "CategoryValue": "pleated",
                      "tagCodes": [
                        "ladies_skirts_pleated",
                        "ladies_skirts_pleated"
                      ]
                    },
                    {
                      "CatName": "Short Skirts",
                      "CategoryValue": "short-skirts",
                      "tagCodes": [
                        "ladies_skirts_shortskirts",
                        "ladies_skirts_shortskirts"
                      ]
                    },
                    {
                      "CatName": "Midi Skirts",
                      "CategoryValue": "midi-skirts",
                      "tagCodes": [
                        "ladies_skirts_midiskirts",
                        "ladies_skirts_midiskirts"
                      ]
                    },
                    {
                      "CatName": "Maxi skirts",
                      "CategoryValue": "long-skirts",
                      "tagCodes": [
                        "ladies_skirts_longskirts",
                        "ladies_skirts_longskirts"
                      ]
                    },
                    {
                      "CatName": "Pencil Skirts",
                      "CategoryValue": "pencil",
                      "tagCodes": [
                        "Ladies_skirts_pencil",
                        "Ladies_skirts_pencil"
                      ]
                    },
                    {
                      "CatName": "Denim Skirts",
                      "CategoryValue": "denim",
                      "tagCodes": [
                        "Ladies_skirts_denim",
                        "Ladies_skirts_denim"
                      ]
                    },
                    {
                      "CatName": "High Waisted Skirts",
                      "CategoryValue": "high-waisted",
                      "tagCodes": [
                        "Ladies_skirts_highwaisted",
                        "Ladies_skirts_highwaisted"
                      ]
                    },
                    {
                      "CatName": "Skater skirts",
                      "CategoryValue": "skater",
                      "tagCodes": [
                        "Ladies_skirts_a-line",
                        "Ladies_skirts_a-line"
                      ]
                    },
                    {
                      "CatName": "Wrap Skirts",
                      "CategoryValue": "wrap-skirts",
                      "tagCodes": [
                        "Ladies_skirts_wrap",
                        "Ladies_skirts_wrap"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_skirts",
                    "ladies_skirts"
                  ]
                },
                {
                  "CatName": "Shorts",
                  "CategoryValue": "shorts",
                  "CategoriesArray": [
                    {
                      "CatName": "Cycling Shorts",
                      "CategoryValue": "cycling",
                      "tagCodes": [
                        "ladies_shorts_biker",
                        "ladies_shorts_biker"
                      ]
                    },
                    {
                      "CatName": "High Waisted Shorts",
                      "CategoryValue": "high-waisted",
                      "tagCodes": [
                        "Ladies_shorts_highwaisted",
                        "Ladies_shorts_highwaisted"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_shorts",
                    "ladies_shorts"
                  ]
                },
                {
                  "CatName": "Knitwear",
                  "CategoryValue": "knitwear",
                  "tagCodes": [
                    "ladies_knitwear",
                    "ladies_knitwear"
                  ]
                },
                {
                  "CatName": "Blazers",
                  "CategoryValue": "blazers-and-waistcoats",
                  "tagCodes": [
                    "ladies_blazerswaistcoats",
                    "ladies_blazerswaistcoats"
                  ]
                },
                {
                  "CatName": "Jackets & Coats",
                  "CategoryValue": "jackets-and-coats",
                  "CategoriesArray": [
                    {
                      "CatName": "Gilets",
                      "CategoryValue": "gilets",
                      "tagCodes": [
                        "ladies_jacketscoats_gilets",
                        "ladies_jacketscoats_gilets"
                      ]
                    },
                    {
                      "CatName": "Shackets",
                      "CategoryValue": "shirt-jackets",
                      "tagCodes": [
                        "ladies_jacketscoats_shirtjackets",
                        "ladies_jacketscoats_shirtjackets"
                      ]
                    },
                    {
                      "CatName": "Trench Coats",
                      "CategoryValue": "trenchcoats",
                      "tagCodes": [
                        "ladies_jacketscoats_trench",
                        "ladies_jacketscoats_trench"
                      ]
                    },
                    {
                      "CatName": "Jackets",
                      "CategoryValue": "jackets",
                      "tagCodes": [
                        "ladies_jacketscoats_jackets",
                        "ladies_jacketscoats_jackets"
                      ]
                    },
                    {
                      "CatName": "Coats",
                      "CategoryValue": "coats",
                      "tagCodes": [
                        "ladies_jacketscoats_coats",
                        "ladies_jacketscoats_coats"
                      ]
                    },
                    {
                      "CatName": "Bomber Jackets",
                      "CategoryValue": "bomber-jackets",
                      "tagCodes": [
                        "ladies_jacketscoats_bomber",
                        "ladies_jacketscoats_bomber"
                      ]
                    },
                    {
                      "CatName": "Parkas ",
                      "CategoryValue": "parkas",
                      "tagCodes": [
                        "ladies_jacketscoats_parkas",
                        "ladies_jacketscoats_parkas"
                      ]
                    },
                    {
                      "CatName": "Biker Jackets",
                      "CategoryValue": "biker-jackets",
                      "tagCodes": [
                        "ladies_jacketscoats_biker",
                        "ladies_jacketscoats_biker"
                      ]
                    },
                    {
                      "CatName": "Denim Jackets",
                      "CategoryValue": "denim-jackets",
                      "tagCodes": [
                        "ladies_jacketscoats_denim",
                        "ladies_jacketscoats_denim"
                      ]
                    },
                    {
                      "CatName": "Puffer Jackets",
                      "CategoryValue": "puffer",
                      "tagCodes": [
                        "ladies_jacketscoats_puffer",
                        "ladies_jacketscoats_puffer"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_jacketscoats",
                    "ladies_jacketscoats"
                  ]
                },
                {
                  "CatName": "Cardigans & Jumpers",
                  "CategoryValue": "cardigans-and-jumpers",
                  "CategoriesArray": [
                    {
                      "CatName": "Sweater Vests",
                      "CategoryValue": "sweater-vests",
                      "tagCodes": [
                        "ladies_cardigansjumpers_sweatervests",
                        "ladies_cardigansjumpers_sweatervests"
                      ]
                    },
                    {
                      "CatName": "Cardigans",
                      "CategoryValue": "cardigans",
                      "tagCodes": [
                        "ladies_cardigansjumpers_cardigans",
                        "ladies_cardigansjumpers_cardigans"
                      ]
                    },
                    {
                      "CatName": "Jumpers",
                      "CategoryValue": "jumpers",
                      "tagCodes": [
                        "ladies_cardigansjumpers_jumpers",
                        "ladies_cardigansjumpers_jumpers"
                      ]
                    },
                    {
                      "CatName": "Ponchos",
                      "CategoryValue": "ponchos",
                      "tagCodes": [
                        "ladies_knitwear_ponchos"
                      ]
                    },
                    {
                      "CatName": "Turtlenecks",
                      "CategoryValue": "turtlenecks",
                      "tagCodes": [
                        "ladies_cardigansjumpers_turtlenecks",
                        "ladies_cardigansjumpers_turtlenecks"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_cardigansjumpers",
                    "ladies_cardigansjumpers"
                  ]
                },
                {
                  "CatName": "Jumpsuits & Rompers",
                  "CategoryValue": "jumpsuits",
                  "CategoriesArray": [
                    {
                      "CatName": "Dungarees",
                      "CategoryValue": "dungarees",
                      "tagCodes": [
                        "ladies_jumpsuits_dungarees",
                        "ladies_jumpsuits_dungarees"
                      ]
                    },
                    {
                      "CatName": "Long Jumpsuits",
                      "CategoryValue": "long-jumpsuits",
                      "tagCodes": [
                        "ladies_jumpsuits_long",
                        "ladies_jumpsuits_long"
                      ]
                    },
                    {
                      "CatName": "Short Jumpsuits",
                      "CategoryValue": "short-jumpsuits",
                      "tagCodes": [
                        "ladies_jumpsuits_short",
                        "ladies_jumpsuits_short"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_jumpsuits",
                    "ladies_jumpsuits"
                  ]
                },
                {
                  "CatName": "Lingerie",
                  "CategoryValue": "lingerie",
                  "CategoriesArray": [
                    {
                      "CatName": "Bras",
                      "CategoryValue": "bras",
                      "CategoriesArray": [
                        {
                          "CatName": "Bralettes",
                          "CategoryValue": "bralette",
                          "tagCodes": [
                            "ladies_lingerie_bras_bralettes",
                            "ladies_lingerie_bras_bralettes"
                          ]
                        },
                        {
                          "CatName": "Super Push-up Bras",
                          "CategoryValue": "super-pushup-bra",
                          "tagCodes": [
                            "ladies_lingerie_bras_superpushup",
                            "ladies_lingerie_bras_superpushup"
                          ]
                        },
                        {
                          "CatName": "Push up Bras",
                          "CategoryValue": "pushup-bra",
                          "tagCodes": [
                            "ladies_lingerie_bras_pushup",
                            "ladies_lingerie_bras_pushup"
                          ]
                        },
                        {
                          "CatName": "Padded Bras",
                          "CategoryValue": "padded-bra",
                          "tagCodes": [
                            "ladies_lingerie_bras_padded",
                            "ladies_lingerie_bras_padded"
                          ]
                        },
                        {
                          "CatName": "Balconette Bras",
                          "CategoryValue": "balconette-bra",
                          "tagCodes": [
                            "ladies_lingerie_bras_balconette",
                            "ladies_lingerie_bras_balconette"
                          ]
                        },
                        {
                          "CatName": "Strapless & Bandeau Bras",
                          "CategoryValue": "strapless-bandeau-bras",
                          "tagCodes": [
                            "ladies_lingerie_bras_straplessbandeaubras"
                          ]
                        },
                        {
                          "CatName": "Multipack Bras",
                          "CategoryValue": "multipack-bras",
                          "tagCodes": [
                            "ladies_lingerie_bras_multipack"
                          ]
                        },
                        {
                          "CatName": "Wireless & Soft Bras",
                          "CategoryValue": "wireless-soft-bras",
                          "tagCodes": [
                            "ladies_lingerie_bras_softwireless"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_lingerie_bras",
                        "ladies_lingerie_bras"
                      ]
                    },
                    {
                      "CatName": "Knickers",
                      "CategoryValue": "briefs-and-knickers",
                      "CategoriesArray": [
                        {
                          "CatName": "Hipsters",
                          "CategoryValue": "hipsters",
                          "tagCodes": [
                            "ladies_lingerie_briefsknickers_hipsters",
                            "ladies_lingerie_briefsknickers_hipsters"
                          ]
                        },
                        {
                          "CatName": "Thongs",
                          "CategoryValue": "thongs",
                          "tagCodes": [
                            "ladies_lingerie_briefsknickers_thongs",
                            "ladies_lingerie_briefsknickers_thongs"
                          ]
                        },
                        {
                          "CatName": "Multipack",
                          "CategoryValue": "multipack",
                          "tagCodes": [
                            "ladies_lingerie_briefsknickers_multipack",
                            "ladies_lingerie_briefsknickers_multipack"
                          ]
                        },
                        {
                          "CatName": "Brazilian",
                          "CategoryValue": "brazilian",
                          "tagCodes": [
                            "ladies_lingerie_briefsknickers_brazilian"
                          ]
                        },
                        {
                          "CatName": "Bikini & Briefs",
                          "CategoryValue": "bikini-briefs",
                          "tagCodes": [
                            "ladies_lingerie_briefsknickers_bikinibriefs"
                          ]
                        },
                        {
                          "CatName": "Shortie & High Waist",
                          "CategoryValue": "shortie-high-waist",
                          "tagCodes": [
                            "ladies_lingerie_briefsknickers_shortiehighwaist"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_lingerie_briefsknickers",
                        "ladies_lingerie_briefsknickers"
                      ]
                    },
                    {
                      "CatName": "Shape & Functional Lingerie",
                      "CategoryValue": "shape-lingerie",
                      "tagCodes": [
                        "ladies_lingerie_shapewear",
                        "ladies_lingerie_shapefunctional",
                        "ladies_lingerie_shapelingerie"
                      ]
                    },
                    {
                      "CatName": "Accessories",
                      "CategoryValue": "accessories",
                      "tagCodes": [
                        "ladies_lingerie_accessories",
                        "ladies_lingerie_accessories"
                      ]
                    },
                    {
                      "CatName": "Multipacks",
                      "CategoryValue": "multipacks",
                      "tagCodes": [
                        "ladies_lingerie_bras_multipack",
                        "ladies_lingerie_briefsknickers_multipack"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_lingerie",
                    "ladies_lingerie"
                  ]
                },
                {
                  "CatName": "Nightwear",
                  "CategoryValue": "nightwear",
                  "CategoriesArray": [
                    {
                      "CatName": "Pyjamas",
                      "CategoryValue": "pyjamas",
                      "tagCodes": [
                        "ladies_nightwear_pyjamas"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_nightwear"
                  ]
                },
                {
                  "CatName": "Sportswear",
                  "CategoryValue": "hm-sport",
                  "CategoriesArray": [
                    {
                      "CatName": "T-shirts & Tops",
                      "CategoryValue": "tops",
                      "CategoriesArray": [
                        {
                          "CatName": "Vests & Tank Tops",
                          "CategoryValue": "vests",
                          "tagCodes": [
                            "ladies_sport_tops_vest",
                            "ladies_sport_tops_vest"
                          ]
                        },
                        {
                          "CatName": "T-shirts",
                          "CategoryValue": "short-sleeve",
                          "tagCodes": [
                            "ladies_sport_tops_shortsleeve",
                            "ladies_sport_tops_shortsleeve"
                          ]
                        },
                        {
                          "CatName": "Long Sleeve Tops",
                          "CategoryValue": "long-sleeve",
                          "tagCodes": [
                            "ladies_sport_tops_longsleeve",
                            "ladies_sport_tops_longsleeve"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_sport_tops",
                        "ladies_sport_tops"
                      ]
                    },
                    {
                      "CatName": "Sport Bras",
                      "CategoryValue": "sport-bras",
                      "tagCodes": [
                        "ladies_sport_sportbras",
                        "ladies_sport_sportbras"
                      ]
                    },
                    {
                      "CatName": "Jackets",
                      "CategoryValue": "jackets",
                      "tagCodes": [
                        "ladies_sport_jackets",
                        "ladies_sport_jackets"
                      ]
                    },
                    {
                      "CatName": "Leggings & Tights",
                      "CategoryValue": "leggings-tights",
                      "tagCodes": [
                        "ladies_sport_leggingstights",
                        "ladies_sport_leggingstights"
                      ]
                    },
                    {
                      "CatName": "Trousers & Joggers",
                      "CategoryValue": "trousers-joggers",
                      "tagCodes": [
                        "ladies_sport_trousersjoggers",
                        "ladies_sport_trousersjoggers"
                      ]
                    },
                    {
                      "CatName": "Active Swimwear",
                      "CategoryValue": "swimwear",
                      "tagCodes": [
                        "ladies_sport_activeswimwear",
                        "ladies_sport_activeswimwear"
                      ]
                    },
                    {
                      "CatName": "Accessories",
                      "CategoryValue": "sport-accessories",
                      "tagCodes": [
                        "ladies_sport_sportaccessories",
                        "ladies_sport_sportaccessories"
                      ]
                    },
                    {
                      "CatName": "Yoga",
                      "CategoryValue": "yoga",
                      "tagCodes": [
                        "ladies_sportswear_yoga",
                        "ladies_sportswear_yoga"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_sport"
                  ]
                },
                {
                  "CatName": "Swimwear & Beachwear",
                  "CategoryValue": "swimwear",
                  "CategoriesArray": [
                    {
                      "CatName": "Bikinisets",
                      "CategoryValue": "bikinisets",
                      "CategoriesArray": [
                        {
                          "CatName": "Bikini tops",
                          "CategoryValue": "tops",
                          "tagCodes": [
                            "ladies_swimwear_bikinisets_tops",
                            "ladies_swimwear_bikinisets_tops"
                          ]
                        },
                        {
                          "CatName": "Bikini bottoms",
                          "CategoryValue": "bottoms",
                          "tagCodes": [
                            "ladies_swimwear_bikinisets_bottoms",
                            "ladies_swimwear_bikinisets_bottoms"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_swimwear_bikinisets",
                        "ladies_swimwear_bikinisets"
                      ]
                    },
                    {
                      "CatName": "Swimsuits",
                      "CategoryValue": "swimsuits",
                      "tagCodes": [
                        "ladies_swimwear_swimsuits",
                        "ladies_swimwear_swimsuits"
                      ]
                    },
                    {
                      "CatName": "Beachwear",
                      "CategoryValue": "beachwear",
                      "tagCodes": [
                        "ladies_swimwear_beachwear",
                        "ladies_swimwear_beachwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_swimwear",
                    "ladies_swimwear"
                  ]
                },
                {
                  "CatName": "Accessories",
                  "CategoryValue": "accessories",
                  "CategoriesArray": [
                    {
                      "CatName": "Face masks",
                      "CategoryValue": "face-masks",
                      "tagCodes": [
                        "ladies_accessories_facemasks",
                        "ladies_accessories_facemasks"
                      ]
                    },
                    {
                      "CatName": "Bags",
                      "CategoryValue": "bags",
                      "CategoriesArray": [
                        {
                          "CatName": "Laptop",
                          "CategoryValue": "laptop-bags",
                          "tagCodes": [
                            "ladies_accessories_bags_laptopbags",
                            "ladies_accessories_bags_laptopbags"
                          ]
                        },
                        {
                          "CatName": "Shoppers & Totes",
                          "CategoryValue": "shoppers-totes",
                          "tagCodes": [
                            "ladies_accessories_bags_shoppertotes",
                            "ladies_accessories_bags_shoppertotes"
                          ]
                        },
                        {
                          "CatName": "Shoulder & Cross bags",
                          "CategoryValue": "shoulder-cross-bags",
                          "tagCodes": [
                            "ladies_accessories_bags_shouldercrossbags",
                            "ladies_accessories_bags_shouldercrossbags"
                          ]
                        },
                        {
                          "CatName": "Small bags & Clutch",
                          "CategoryValue": "small-bags-clutch",
                          "tagCodes": [
                            "ladies_accessories_bags_smallbagsclutch",
                            "ladies_accessories_bags_smallbagsclutch"
                          ]
                        },
                        {
                          "CatName": "Handbags",
                          "CategoryValue": "handbags",
                          "tagCodes": [
                            "ladies_accessories_bags_handbags",
                            "ladies_accessories_bags_handbags"
                          ]
                        },
                        {
                          "CatName": "Backpack",
                          "CategoryValue": "backpack",
                          "tagCodes": [
                            "ladies_accessories_bags_backpack",
                            "ladies_accessories_bags_backpack"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_accessories_bags",
                        "ladies_accessories_bags"
                      ]
                    },
                    {
                      "CatName": "Belts",
                      "CategoryValue": "belts",
                      "tagCodes": [
                        "ladies_accessories_belts",
                        "ladies_accessories_belts"
                      ]
                    },
                    {
                      "CatName": "Jewellery",
                      "CategoryValue": "jewellery",
                      "CategoriesArray": [
                        {
                          "CatName": "Earrings",
                          "CategoryValue": "earrings",
                          "tagCodes": [
                            "ladies_accessories_jewellery_earrings",
                            "ladies_accessories_jewellery_earrings"
                          ]
                        },
                        {
                          "CatName": "Necklaces",
                          "CategoryValue": "necklaces",
                          "tagCodes": [
                            "ladies_accessories_jewellery_necklaces",
                            "ladies_accessories_jewellery_necklaces"
                          ]
                        },
                        {
                          "CatName": "Bracelets",
                          "CategoryValue": "bracelets",
                          "tagCodes": [
                            "ladies_accessories_jewellery_bracelets",
                            "ladies_accessories_jewellery_bracelets"
                          ]
                        },
                        {
                          "CatName": "Rings",
                          "CategoryValue": "rings",
                          "tagCodes": [
                            "ladies_accessories_jewellery_rings",
                            "ladies_accessories_jewellery_rings"
                          ]
                        },
                        {
                          "CatName": "Watches",
                          "CategoryValue": "watches",
                          "tagCodes": [
                            "ladies_accessories_watches",
                            "ladies_accessories_watches"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_accessories_jewellery",
                        "ladies_accessories_jewellery"
                      ]
                    },
                    {
                      "CatName": "Hair Accessories",
                      "CategoryValue": "hair-accessories",
                      "tagCodes": [
                        "ladies_accessories_hairaccessories",
                        "ladies_accessories_hairaccessories"
                      ]
                    },
                    {
                      "CatName": "Sunglasses",
                      "CategoryValue": "sunglasses",
                      "tagCodes": [
                        "ladies_accessories_sunglasses",
                        "ladies_accessories_sunglasses"
                      ]
                    },
                    {
                      "CatName": "Mobile Accessories",
                      "CategoryValue": "mobile-accessories",
                      "tagCodes": [
                        "ladies_accessories_mobileaccessories",
                        "ladies_accessories_mobileaccessories"
                      ]
                    },
                    {
                      "CatName": "Gloves",
                      "CategoryValue": "gloves",
                      "tagCodes": [
                        "ladies_accessories_gloves",
                        "ladies_accessories_gloves"
                      ]
                    },
                    {
                      "CatName": "Scarves",
                      "CategoryValue": "scarves",
                      "tagCodes": [
                        "ladies_accessories_scarves",
                        "ladies_accessories_scarves"
                      ]
                    },
                    {
                      "CatName": "Hats",
                      "CategoryValue": "hats",
                      "CategoriesArray": [
                        {
                          "CatName": "Caps",
                          "CategoryValue": "caps",
                          "tagCodes": [
                            "ladies_accessories_hats_caps",
                            "ladies_accessories_hats_caps"
                          ]
                        },
                        {
                          "CatName": "Beanies",
                          "CategoryValue": "beanies",
                          "tagCodes": [
                            "ladies_accessories_hats_beanies",
                            "ladies_accessories_hats_beanies"
                          ]
                        },
                        {
                          "CatName": "Straw Hats & Sun Hats",
                          "CategoryValue": "sun-straw-hats",
                          "tagCodes": [
                            "ladies_accessories_hats_sunhats",
                            "ladies_accessories_hats_sunhats"
                          ]
                        },
                        {
                          "CatName": "Felt/Fedora hats",
                          "CategoryValue": "felt-fedora",
                          "tagCodes": [
                            "ladies_accessories_hats_hats",
                            "ladies_accessories_hats_hats"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_accessories_hats",
                        "ladies_accessories_hats"
                      ]
                    },
                    {
                      "CatName": "Wallets & Purses",
                      "CategoryValue": "wallets-purses",
                      "tagCodes": [
                        "ladies_accessories_wallets",
                        "ladies_accessories_wallets"
                      ]
                    },
                    {
                      "CatName": "Sarongs & Ponchos",
                      "CategoryValue": "sarongs-ponchos",
                      "tagCodes": [
                        "ladies_accessories_sarongsponchos",
                        "ladies_accessories_sarongsponchos"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_accessories",
                    "ladies_accessories"
                  ]
                },
                {
                  "CatName": "Shoes",
                  "CategoryValue": "shoes",
                  "CategoriesArray": [
                    {
                      "CatName": "Mules",
                      "CategoryValue": "mules",
                      "tagCodes": [
                        "ladies_shoes_mules",
                        "ladies_shoes_mules"
                      ]
                    },
                    {
                      "CatName": "Pumps & High heels",
                      "CategoryValue": "pumps-high-heels",
                      "tagCodes": [
                        "ladies_shoes_pumps_highheels",
                        "ladies_shoes_pumps_highheels"
                      ]
                    },
                    {
                      "CatName": "Ballerinas & Flats",
                      "CategoryValue": "ballerinas-flats",
                      "tagCodes": [
                        "ladies_shoes_ballerinas_flats",
                        "ladies_shoes_ballerinas_flats"
                      ]
                    },
                    {
                      "CatName": "Sandals & Espadrilles",
                      "CategoryValue": "sandals-and-espandrillos",
                      "tagCodes": [
                        "ladies_shoes_sandals_espandrillos",
                        "ladies_shoes_sandals_espandrillos"
                      ]
                    },
                    {
                      "CatName": "Trainers",
                      "CategoryValue": "sneakers",
                      "tagCodes": [
                        "ladies_shoes_sneakers",
                        "ladies_shoes_sneakers"
                      ]
                    },
                    {
                      "CatName": "Boots",
                      "CategoryValue": "boots",
                      "CategoriesArray": [
                        {
                          "CatName": "Combat Boots",
                          "CategoryValue": "combat",
                          "tagCodes": [
                            "ladies_shoes_boots_combat",
                            "ladies_shoes_boots_combat"
                          ]
                        },
                        {
                          "CatName": "Ankle Boots",
                          "CategoryValue": "ankle-boots",
                          "tagCodes": [
                            "ladies_shoes_ankle_boots",
                            "ladies_shoes_ankle_boots"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_shoes_boots",
                        "ladies_shoes_boots"
                      ]
                    },
                    {
                      "CatName": "Loafers",
                      "CategoryValue": "loafers",
                      "tagCodes": [
                        "Ladies_shoes_loafers",
                        "Ladies_shoes_loafers"
                      ]
                    },
                    {
                      "CatName": "Slip-on",
                      "CategoryValue": "slip-on",
                      "tagCodes": [
                        "Ladies_shoes_slipon",
                        "Ladies_shoes_slipon"
                      ]
                    },
                    {
                      "CatName": "Flip Flops",
                      "CategoryValue": "flip-flops",
                      "tagCodes": [
                        "Ladies_shoes_flipflops",
                        "Ladies_shoes_flipflops"
                      ]
                    },
                    {
                      "CatName": "Slippers",
                      "CategoryValue": "slippers",
                      "tagCodes": [
                        "ladies_shoes_slippers",
                        "ladies_shoes_slippers"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_shoes",
                    "ladies_shoes"
                  ]
                },
                {
                  "CatName": "Socks & Tights",
                  "CategoryValue": "socks-and-tights",
                  "CategoriesArray": [
                    {
                      "CatName": "Socks",
                      "CategoryValue": "socks",
                      "CategoriesArray": [
                        {
                          "CatName": "Sports Socks",
                          "CategoryValue": "sport",
                          "tagCodes": [
                            "ladies_sockstights_socks_sport",
                            "ladies_sockstights_socks_sport"
                          ]
                        },
                        {
                          "CatName": "Knee High Socks",
                          "CategoryValue": "knee-high",
                          "tagCodes": [
                            "ladies_sockstights_socks_kneehigh",
                            "ladies_sockstights_socks_kneehigh"
                          ]
                        },
                        {
                          "CatName": "Ankle Socks",
                          "CategoryValue": "ankle",
                          "tagCodes": [
                            "ladies_sockstights_socks_ankle",
                            "ladies_sockstights_socks_ankle"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_sockstights_socks",
                        "ladies_sockstights_socks"
                      ]
                    },
                    {
                      "CatName": "Tights & Leggings",
                      "CategoryValue": "tights-and-leggings",
                      "tagCodes": [
                        "ladies_sockstights_tightleggings",
                        "ladies_sockstights_tightleggings"
                      ]
                    },
                    {
                      "CatName": "Shape",
                      "CategoryValue": "shape",
                      "tagCodes": [
                        "ladies_sockstights_shape",
                        "ladies_sockstights_shape"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_sockstights",
                    "ladies_sockstights"
                  ]
                },
                {
                  "CatName": "Maternity Wear",
                  "CategoryValue": "maternity-wear",
                  "CategoriesArray": [
                    {
                      "CatName": "New Arrivals",
                      "CategoryValue": "new-arrivals",
                      "tagCodes": [
                        "ladies_newarrivals_maternitywear",
                        "ladies_newarrivals_maternitywear"
                      ]
                    },
                    {
                      "CatName": "Tops",
                      "CategoryValue": "tops",
                      "tagCodes": [
                        "ladies_maternity_tops",
                        "ladies_maternity_tops"
                      ]
                    },
                    {
                      "CatName": "Jeans",
                      "CategoryValue": "jeans",
                      "tagCodes": [
                        "ladies_maternity_jeans",
                        "ladies_maternity_jeans"
                      ]
                    },
                    {
                      "CatName": "Basics",
                      "CategoryValue": "best-basics",
                      "tagCodes": [
                        "ladies_maternity_basics"
                      ]
                    },
                    {
                      "CatName": "Dresses",
                      "CategoryValue": "dresses",
                      "tagCodes": [
                        "ladies_maternity_dresses",
                        "ladies_maternity_dresses"
                      ]
                    },
                    {
                      "CatName": "Swimwear",
                      "CategoryValue": "swimwear",
                      "tagCodes": [
                        "ladies_maternity_swimwear",
                        "ladies_maternity_swimwear"
                      ]
                    },
                    {
                      "CatName": "Lingerie & Tights",
                      "CategoryValue": "lingerie-and-tights",
                      "tagCodes": [
                        "ladies_maternity_lingerietights",
                        "ladies_maternity_lingerietights"
                      ]
                    },
                    {
                      "CatName": "Nursing",
                      "CategoryValue": "nursing",
                      "tagCodes": [
                        "ladies_maternity_nursing",
                        "ladies_maternity_nursing"
                      ]
                    },
                    {
                      "CatName": "Shirts & Blouses",
                      "CategoryValue": "shirts-blouses",
                      "tagCodes": [
                        "ladies_maternity_shirtsblouses",
                        "ladies_maternity_shirtsblouses"
                      ]
                    },
                    {
                      "CatName": "Cardigans & Jumpers",
                      "CategoryValue": "cardigans-jumpers",
                      "tagCodes": [
                        "ladies_maternity_cardigansjumpers",
                        "ladies_maternity_cardigansjumpers"
                      ]
                    },
                    {
                      "CatName": "Jackets & Coats",
                      "CategoryValue": "jackets-coats",
                      "tagCodes": [
                        "ladies_maternity_jacketscoats",
                        "ladies_maternity_jacketscoats"
                      ]
                    },
                    {
                      "CatName": "Skirts & Shorts",
                      "CategoryValue": "skirts-shorts",
                      "tagCodes": [
                        "ladies_maternity_skirtsshorts",
                        "ladies_maternity_skirtsshorts"
                      ]
                    },
                    {
                      "CatName": "Trousers & Leggings",
                      "CategoryValue": "trousers-leggings",
                      "tagCodes": [
                        "ladies_maternity_trousersleggings",
                        "ladies_maternity_trousersleggings"
                      ]
                    },
                    {
                      "CatName": "Nightwear & Loungewear",
                      "CategoryValue": "nightwear-loungewear",
                      "tagCodes": [
                        "ladies_maternity_nightwearloungewear",
                        "ladies_maternity_nightwearloungewear"
                      ]
                    },
                    {
                      "CatName": "Sportswear",
                      "CategoryValue": "sportswear",
                      "tagCodes": [
                        "ladies_maternity_sportswear",
                        "ladies_maternity_sportswear"
                      ]
                    },
                    {
                      "CatName": "Occasion Wear",
                      "CategoryValue": "occasionwear",
                      "tagCodes": [
                        "ladies_maternity_occasionwear",
                        "ladies_maternity_occasionwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_maternity",
                    "ladies_maternity"
                  ]
                },
                {
                  "CatName": "Plus Sizes",
                  "CategoryValue": "hm-plus",
                  "CategoriesArray": [
                    {
                      "CatName": "H&M+ Plus Sizes",
                      "CategoryValue": "new-arrivals",
                      "tagCodes": [
                        "ladies_newarrivals_hmplus",
                        "ladies_newarrivals_hmplus"
                      ]
                    },
                    {
                      "CatName": "Skirts",
                      "CategoryValue": "skirts",
                      "tagCodes": [
                        "ladies_plus_skirts",
                        "ladies_plus_skirts"
                      ]
                    },
                    {
                      "CatName": "Shorts",
                      "CategoryValue": "shorts",
                      "tagCodes": [
                        "ladies_plus_shorts",
                        "ladies_plus_shorts"
                      ]
                    },
                    {
                      "CatName": "Tops",
                      "CategoryValue": "tops",
                      "CategoriesArray": [
                        {
                          "CatName": "T-Shirts",
                          "CategoryValue": "t-shirts",
                          "tagCodes": [
                            "ladies_plus_tops_tshirts",
                            "ladies_plus_tops_tshirts"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_plus_tops",
                        "ladies_plus_tops"
                      ]
                    },
                    {
                      "CatName": "Jeans",
                      "CategoryValue": "jeans",
                      "tagCodes": [
                        "ladies_plus_jeans",
                        "ladies_plus_jeans"
                      ]
                    },
                    {
                      "CatName": "Dresses",
                      "CategoryValue": "dresses",
                      "CategoriesArray": [
                        {
                          "CatName": "T-Shirt Dresses",
                          "CategoryValue": "t-shirt-dresses",
                          "tagCodes": [
                            "ladies_plus_dresses_tshirt",
                            "ladies_plus_dresses_tshirt"
                          ]
                        },
                        {
                          "CatName": "Shirt Dresses",
                          "CategoryValue": "shirt-dresses",
                          "tagCodes": [
                            "ladies_plus_dresses_shirt",
                            "ladies_plus_dresses_shirt"
                          ]
                        },
                        {
                          "CatName": "Maxi",
                          "CategoryValue": "maxi-dresses",
                          "tagCodes": [
                            "ladies_plus_dresses_maxi",
                            "ladies_plus_dresses_maxi"
                          ]
                        },
                        {
                          "CatName": "Long Sleeve",
                          "CategoryValue": "long-sleeved-dresses",
                          "tagCodes": [
                            "ladies_plus_dresses_longsleeved",
                            "ladies_plus_dresses_longsleeved"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_plus_dresses",
                        "ladies_plus_dresses"
                      ]
                    },
                    {
                      "CatName": "Sportswear",
                      "CategoryValue": "sport",
                      "tagCodes": [
                        "ladies_plus_sport",
                        "ladies_plus_sport"
                      ]
                    },
                    {
                      "CatName": "Swimwear",
                      "CategoryValue": "swimwear",
                      "CategoriesArray": [
                        {
                          "CatName": "Bikini Sets",
                          "CategoryValue": "bikinis",
                          "tagCodes": [
                            "ladies_plus_swimwear_bikinis",
                            "ladies_plus_swimwear_bikinis"
                          ]
                        },
                        {
                          "CatName": "Swimsuits",
                          "CategoryValue": "swimsuits",
                          "tagCodes": [
                            "ladies_plus_swimwear_swimsuits",
                            "ladies_plus_swimwear_swimsuits"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_plus_swimwear",
                        "ladies_plus_swimwear"
                      ]
                    },
                    {
                      "CatName": "Lingerie & Tights",
                      "CategoryValue": "lingerie-and-tights",
                      "tagCodes": [
                        "ladies_plus_lingerietights",
                        "ladies_plus_lingerietights"
                      ]
                    },
                    {
                      "CatName": "Cardigans & Jumpers",
                      "CategoryValue": "cardigans-jumpers",
                      "tagCodes": [
                        "ladies_plus_cardigansjumpers",
                        "ladies_plus_cardigansjumpers"
                      ]
                    },
                    {
                      "CatName": "Shirts & Blouses",
                      "CategoryValue": "shirts-blouses",
                      "tagCodes": [
                        "ladies_plus_shirtsblouses"
                      ]
                    },
                    {
                      "CatName": "Jumpsuits & Playsuits",
                      "CategoryValue": "jumpsuits-playsuits",
                      "tagCodes": [
                        "ladies_plus_jumpsuits",
                        "ladies_plus_jumpsuits"
                      ]
                    },
                    {
                      "CatName": "Jackets & Coats",
                      "CategoryValue": "jackets-coats",
                      "CategoriesArray": [
                        {
                          "CatName": "Coats",
                          "CategoryValue": "coats",
                          "tagCodes": [
                            "ladies_plus_jacketscoats_coats",
                            "ladies_plus_jacketscoats_coats"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "ladies_plus_jacketscoats",
                        "ladies_plus_jacketscoats"
                      ]
                    },
                    {
                      "CatName": "Trousers & Leggings",
                      "CategoryValue": "trousers-leggings",
                      "tagCodes": [
                        "ladies_plus_trousersleggings",
                        "ladies_plus_trousersleggings"
                      ]
                    },
                    {
                      "CatName": "Nightwear & Loungewear",
                      "CategoryValue": "nightwear-loungewear",
                      "tagCodes": [
                        "ladies_plus_nightwearlougewear",
                        "ladies_plus_nightwearlougewear"
                      ]
                    },
                    {
                      "CatName": "Occasion Wear",
                      "CategoryValue": "occasionwear",
                      "tagCodes": [
                        "ladies_plus_occasionwear",
                        "ladies_plus_occasionwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_plus",
                    "ladies_plus"
                  ]
                },
                {
                  "CatName": "Petite Size",
                  "CategoryValue": "petite",
                  "tagCodes": [
                    "ladies_petite",
                    "ladies_petite"
                  ]
                },
                {
                  "CatName": "Premium Selection",
                  "CategoryValue": "premium-selection",
                  "CategoriesArray": [
                    {
                      "CatName": "Tops",
                      "CategoryValue": "tops",
                      "tagCodes": [
                        "ladies_premium_selection_tops",
                        "ladies_premium_selection_tops"
                      ]
                    },
                    {
                      "CatName": "Shoes",
                      "CategoryValue": "shoes",
                      "tagCodes": [
                        "ladies_premium_selection_shoes",
                        "ladies_premium_selection_shoes"
                      ]
                    },
                    {
                      "CatName": "Jackets & Coats",
                      "CategoryValue": "jackets-coats",
                      "tagCodes": [
                        "ladies_premium_selection_jacketscoats",
                        "ladies_premium_selection_jacketscoats"
                      ]
                    },
                    {
                      "CatName": "Dresses",
                      "CategoryValue": "dresses",
                      "tagCodes": [
                        "ladies_premium_selection_dresses",
                        "ladies_premium_selection_dresses"
                      ]
                    },
                    {
                      "CatName": "Cardigans & Jumpers",
                      "CategoryValue": "cardigans-jumpers",
                      "tagCodes": [
                        "ladies_premium_selection_cardigansjumpers",
                        "ladies_premium_selection_cardigansjumpers"
                      ]
                    },
                    {
                      "CatName": "Bottoms",
                      "CategoryValue": "bottoms",
                      "tagCodes": [
                        "ladies_premium_selection_bottoms",
                        "ladies_premium_selection_bottoms"
                      ]
                    },
                    {
                      "CatName": "Accessories",
                      "CategoryValue": "accessories",
                      "tagCodes": [
                        "ladies_premium_selection_accessories",
                        "ladies_premium_selection_accessories"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_premium_selection",
                    "ladies_premium_selection"
                  ]
                },
                {
                  "CatName": "Dog clothes & Accessories",
                  "CategoryValue": "dog",
                  "tagCodes": [
                    "ladies_dog",
                    "ladies_dog"
                  ]
                }
              ],
              "tagCodes": []
            },
            {
              "CatName": "Shop by Occasion",
              "CategoryValue": "occasion",
              "CategoriesArray": [
                {
                  "CatName": "Loungewear",
                  "CategoryValue": "loungewear",
                  "tagCodes": [
                    "ladies_occasion_loungewear",
                    "ladies_occasion_loungewear"
                  ]
                },
                {
                  "CatName": "Casual Wear",
                  "CategoryValue": "casual-wear",
                  "CategoriesArray": [
                    {
                      "CatName": "Tops",
                      "CategoryValue": "tops",
                      "tagCodes": [
                        "ladies_occasion_casualwear_tops",
                        "ladies_occasion_casualwear_tops"
                      ]
                    },
                    {
                      "CatName": "Shirts",
                      "CategoryValue": "shirts",
                      "tagCodes": [
                        "ladies_occasion_casualwear_shirts",
                        "ladies_occasion_casualwear_shirts"
                      ]
                    },
                    {
                      "CatName": "Dresses",
                      "CategoryValue": "dresses",
                      "tagCodes": [
                        "ladies_occasion_casualwear_dresses",
                        "ladies_occasion_casualwear_dresses"
                      ]
                    },
                    {
                      "CatName": "Bottoms",
                      "CategoryValue": "bottoms",
                      "tagCodes": [
                        "ladies_occasion_casualwear_bottoms",
                        "ladies_occasion_casualwear_bottoms"
                      ]
                    },
                    {
                      "CatName": "Jackets & Coats",
                      "CategoryValue": "jackets-coats",
                      "tagCodes": [
                        "ladies_occasion_casualwear_jacketscoats",
                        "ladies_occasion_casualwear_jacketscoats"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_occasion_casualwear",
                    "ladies_occasion_casualwear"
                  ]
                },
                {
                  "CatName": "Office Wear",
                  "CategoryValue": "office-wear",
                  "CategoriesArray": [
                    {
                      "CatName": "Tops",
                      "CategoryValue": "tops",
                      "tagCodes": [
                        "ladies_occasion_officewear_tops",
                        "ladies_occasion_officewear_tops"
                      ]
                    },
                    {
                      "CatName": "Shirts & Blouses",
                      "CategoryValue": "shirts-blouses",
                      "tagCodes": [
                        "ladies_occasion_officewear_shirtsblouse",
                        "ladies_occasion_officewear_shirtsblouse"
                      ]
                    },
                    {
                      "CatName": "Dresses",
                      "CategoryValue": "dresses",
                      "tagCodes": [
                        "ladies_occasion_officewear_dresses",
                        "ladies_occasion_officewear_dresses"
                      ]
                    },
                    {
                      "CatName": "Skirts",
                      "CategoryValue": "skirts",
                      "tagCodes": [
                        "ladies_occasion_officewear_skirts",
                        "ladies_occasion_officewear_skirts"
                      ]
                    },
                    {
                      "CatName": "Trousers",
                      "CategoryValue": "trousers",
                      "tagCodes": [
                        "ladies_occasion_officewear_trousers",
                        "ladies_occasion_officewear_trousers"
                      ]
                    },
                    {
                      "CatName": "Blazers",
                      "CategoryValue": "blazers",
                      "tagCodes": [
                        "ladies_occasion_officewear_blazers",
                        "ladies_occasion_officewear_blazers"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_occasion_officewear",
                    "ladies_occasion_officewear"
                  ]
                },
                {
                  "CatName": "Party Wear",
                  "CategoryValue": "party",
                  "CategoriesArray": [
                    {
                      "CatName": "Party Dresses",
                      "CategoryValue": "dresses",
                      "tagCodes": [
                        "ladies_occasion_partywear_dresses",
                        "ladies_occasion_partywear_dresses"
                      ]
                    },
                    {
                      "CatName": "Party Tops",
                      "CategoryValue": "tops",
                      "tagCodes": [
                        "ladies_occasion_partywear_tops",
                        "ladies_occasion_partywear_tops"
                      ]
                    },
                    {
                      "CatName": "Going Out Outfits",
                      "CategoryValue": "outfits",
                      "tagCodes": [
                        "ladies_occasion_partywear_goingout",
                        "ladies_occasion_partywear_goingout"
                      ]
                    },
                    {
                      "CatName": "Shoes & Accessories",
                      "CategoryValue": "shoes-accessories",
                      "tagCodes": [
                        "ladies_occasion_partywear_shoesaccessories",
                        "ladies_occasion_partywear_shoesaccessories"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_occasion_partywear",
                    "ladies_occasion_partywear"
                  ]
                },
                {
                  "CatName": "Costume Party",
                  "CategoryValue": "costume-party",
                  "tagCodes": [
                    "ladies_occasion_costumeparty",
                    "ladies_occasion_costumeparty"
                  ]
                }
              ],
              "tagCodes": []
            }
          ],
          "tagCodes": [
            "ladies"
          ]
        },
        {
          "CatName": "Divided",
          "CategoryValue": "divided",
          "CategoriesArray": [
            {
              "CatName": "New Arrivals",
              "CategoryValue": "new-arrivals",
              "CategoriesArray": [
                {
                  "CatName": "Clothes",
                  "CategoryValue": "clothes",
                  "tagCodes": [
                    "ladies_divided_new_clothes"
                  ]
                },
                {
                  "CatName": "Shoes & Accessories",
                  "CategoryValue": "shoes-accessories",
                  "tagCodes": [
                    "ladies_divided_new_accessories"
                  ]
                }
              ],
              "tagCodes": []
            },
            {
              "CatName": "Shop by Product",
              "CategoryValue": "shop-by-product",
              "CategoriesArray": [
                {
                  "CatName": "View All",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "ladies_divided",
                    "ladies_divided"
                  ]
                },
                {
                  "CatName": "Dresses",
                  "CategoryValue": "dresses",
                  "tagCodes": [
                    "ladies_divided_dresses",
                    "ladies_divided_dresses"
                  ]
                },
                {
                  "CatName": "Tops",
                  "CategoryValue": "tops",
                  "tagCodes": [
                    "ladies_divided_tops",
                    "ladies_divided_tops"
                  ]
                },
                {
                  "CatName": "Trousers & Leggings",
                  "CategoryValue": "trousers-leggings",
                  "tagCodes": [
                    "ladies_divided_trousers",
                    "ladies_divided_trousers"
                  ]
                },
                {
                  "CatName": "Jeans",
                  "CategoryValue": "jeans",
                  "CategoriesArray": [
                    {
                      "CatName": "Skinny",
                      "CategoryValue": "skinny",
                      "tagCodes": [
                        "ladies_jeans_skinny",
                        "ladies_jeans_skinny"
                      ]
                    },
                    {
                      "CatName": "Shaping",
                      "CategoryValue": "shaping",
                      "tagCodes": [
                        "ladies_jeans_shaping",
                        "ladies_jeans_shaping"
                      ]
                    },
                    {
                      "CatName": "Slim",
                      "CategoryValue": "slim",
                      "tagCodes": [
                        "ladies_jeans_slim",
                        "ladies_jeans_slim"
                      ]
                    },
                    {
                      "CatName": "High Waisted",
                      "CategoryValue": "high-waisted",
                      "tagCodes": [
                        "ladies_jeans_highwaisted",
                        "ladies_jeans_highwaisted"
                      ]
                    },
                    {
                      "CatName": "Straight",
                      "CategoryValue": "straight",
                      "tagCodes": [
                        "ladies_jeans_straight",
                        "ladies_jeans_straight"
                      ]
                    },
                    {
                      "CatName": "Bootcut",
                      "CategoryValue": "bootcut",
                      "tagCodes": [
                        "ladies_jeans_bootcut",
                        "ladies_jeans_bootcut"
                      ]
                    },
                    {
                      "CatName": "Flare",
                      "CategoryValue": "flare",
                      "tagCodes": [
                        "ladies_jeans_flare",
                        "ladies_jeans_flare"
                      ]
                    },
                    {
                      "CatName": "Loose",
                      "CategoryValue": "loose",
                      "tagCodes": [
                        "ladies_jeans_loose",
                        "ladies_jeans_loose"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "ladies_divided_jeans",
                    "ladies_divided_jeans"
                  ]
                },
                {
                  "CatName": "Underwear & Nightwear",
                  "CategoryValue": "divided-underwear-nightwear",
                  "tagCodes": [
                    "ladies_divided_underwearnightwear",
                    "ladies_divided_underwearnightwear"
                  ]
                },
                {
                  "CatName": "Divided - Basics",
                  "CategoryValue": "basics",
                  "tagCodes": [
                    "ladies_divided_basic",
                    "ladies_divided_basic"
                  ]
                },
                {
                  "CatName": "Shirts & Blouses",
                  "CategoryValue": "shirts-and-blouses",
                  "tagCodes": [
                    "ladies_divided_shirtsblouses",
                    "ladies_divided_shirtsblouses"
                  ]
                },
                {
                  "CatName": "Hoodies & Sweatshirts",
                  "CategoryValue": "hoodies-sweatshirts",
                  "tagCodes": [
                    "ladies_divided_hoodiessweatshirts",
                    "ladies_divided_hoodiessweatshirts"
                  ]
                },
                {
                  "CatName": "Shorts",
                  "CategoryValue": "divided-shorts",
                  "tagCodes": [
                    "ladies_divided_shorts",
                    "ladies_divided_shorts"
                  ]
                },
                {
                  "CatName": "Skirts",
                  "CategoryValue": "skirts",
                  "tagCodes": [
                    "ladies_divided_skirts",
                    "ladies_divided_skirts"
                  ]
                },
                {
                  "CatName": "Jumpsuits & Rompers",
                  "CategoryValue": "jumpsuits-playsuits",
                  "tagCodes": [
                    "ladies_divided_jumpsuitsplaysuits",
                    "ladies_divided_jumpsuitsplaysuits"
                  ]
                },
                {
                  "CatName": "Cardigans & Jumpers",
                  "CategoryValue": "cardigans-jumpers",
                  "tagCodes": [
                    "ladies_divided_cardigansjumpers",
                    "ladies_divided_cardigansjumpers"
                  ]
                },
                {
                  "CatName": "Jackets & Coats",
                  "CategoryValue": "jackets-and-blazers",
                  "tagCodes": [
                    "ladies_divided_jacketscoats",
                    "ladies_divided_jacketscoats"
                  ]
                },
                {
                  "CatName": "Swimwear",
                  "CategoryValue": "divided-swimwear",
                  "tagCodes": [
                    "ladies_divided_swimwear",
                    "ladies_divided_swimwear"
                  ]
                },
                {
                  "CatName": "Accessories",
                  "CategoryValue": "accessories",
                  "tagCodes": [
                    "ladies_divided_accessories",
                    "ladies_divided_accessories"
                  ]
                },
                {
                  "CatName": "Shoes",
                  "CategoryValue": "shoes",
                  "tagCodes": [
                    "ladies_divided_shoes",
                    "ladies_divided_shoes"
                  ]
                },
                {
                  "CatName": "Garment care",
                  "CategoryValue": "care-products",
                  "tagCodes": [
                    "ladies_takecare",
                    "ladies_takecare"
                  ]
                }
              ],
              "tagCodes": []
            },
            {
              "CatName": "Trending now",
              "CategoryValue": "seasonal-trending",
              "CategoriesArray": [
                {
                  "CatName": "Graphics",
                  "CategoryValue": "licence",
                  "tagCodes": [
                    "ladies_divided_licence",
                    "ladies_divided_licence"
                  ]
                },
                {
                  "CatName": "Essentials",
                  "CategoryValue": "essentials",
                  "tagCodes": [
                    "ladies_divided_essentials",
                    "ladies_divided_basic",
                    "ladies_divided_essentials",
                    "ladies_divided_basic"
                  ]
                },
                {
                  "CatName": "Matching sets",
                  "CategoryValue": "matching-sets",
                  "tagCodes": [
                    "ladies_divided_matchingset",
                    "ladies_divided_matchingset"
                  ]
                }
              ],
              "tagCodes": []
            }
          ],
          "tagCodes": [
            "ladies_divided"
          ]
        },
        {
          "CatName": "Men",
          "CategoryValue": "men",
          "CategoriesArray": [
            {
              "CatName": "New Arrivals",
              "CategoryValue": "new-arrivals",
              "CategoriesArray": [
                {
                  "CatName": "View All",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "men_newarrivals_all",
                    "men_newarrivals"
                  ]
                },
                {
                  "CatName": "Sportswear",
                  "CategoryValue": "sportswear",
                  "tagCodes": [
                    "men_newarrivals_sportswear",
                    "men_newarrivals_sportswear"
                  ]
                },
                {
                  "CatName": "Clothes",
                  "CategoryValue": "clothes",
                  "tagCodes": [
                    "men_newarrivals_clothes"
                  ]
                },
                {
                  "CatName": "Shoes & Accessories",
                  "CategoryValue": "shoes-and-accessories",
                  "tagCodes": [
                    "men_newarrivals_shoesaccessories"
                  ]
                }
              ],
              "tagCodes": []
            },
            {
              "CatName": "Shop by Product",
              "CategoryValue": "shop-by-product",
              "CategoriesArray": [
                {
                  "CatName": "View All",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "men_all"
                  ]
                },
                {
                  "CatName": "Premium Selection",
                  "CategoryValue": "premium-selection",
                  "tagCodes": [
                    "men_premium_selection",
                    "men_premium_selection"
                  ]
                },
                {
                  "CatName": "T-shirts & Tanks",
                  "CategoryValue": "t-shirts-and-tanks",
                  "CategoriesArray": [
                    {
                      "CatName": "T-shirts & Tanktops",
                      "CategoryValue": "tanks",
                      "tagCodes": [
                        "men_tshirtstanks_tanks",
                        "men_tshirtstanks_tanks"
                      ]
                    },
                    {
                      "CatName": "T-shirts",
                      "CategoryValue": "short-sleeve",
                      "tagCodes": [
                        "men_tshirtstanks_shortsleeve",
                        "men_tshirtstanks_shortsleeve"
                      ]
                    },
                    {
                      "CatName": "Long Sleeves",
                      "CategoryValue": "long-sleeve",
                      "tagCodes": [
                        "men_tshirtstanks_longsleeve",
                        "men_tshirtstanks_longsleeve"
                      ]
                    },
                    {
                      "CatName": "Polo",
                      "CategoryValue": "polo",
                      "tagCodes": [
                        "MEN_TSHIRTSTANKS_POLO",
                        "MEN_TSHIRTSTANKS_POLO"
                      ]
                    },
                    {
                      "CatName": "Basics",
                      "CategoryValue": "best-basics",
                      "tagCodes": [
                        "men_tshirtstanks_bestbasics",
                        "men_tshirtstanks_bestbasics"
                      ]
                    },
                    {
                      "CatName": "Graphic Tees & Printed T-Shirts",
                      "CategoryValue": "graphic-tees-printed-t-shirts",
                      "tagCodes": [
                        "men_tshirtstanks_printed",
                        "men_tshirtstanks_printed"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_tshirtstanks",
                    "men_tshirtstanks"
                  ]
                },
                {
                  "CatName": "Basics",
                  "CategoryValue": "basics",
                  "CategoriesArray": [
                    {
                      "CatName": "T-shirts",
                      "CategoryValue": "t-shirts",
                      "tagCodes": [
                        "men_basics_tshirts",
                        "men_basics_tshirts"
                      ]
                    },
                    {
                      "CatName": "Tanks",
                      "CategoryValue": "tank-tops",
                      "tagCodes": [
                        "men_basics_tanktops",
                        "men_basics_tanktops"
                      ]
                    },
                    {
                      "CatName": "Hoodies & Sweatshirts",
                      "CategoryValue": "hoodies-and-sweatshirts",
                      "tagCodes": [
                        "men_basics_hoodiessweatshirts",
                        "men_basics_hoodiessweatshirts"
                      ]
                    },
                    {
                      "CatName": "Bottoms",
                      "CategoryValue": "bottoms",
                      "tagCodes": [
                        "men_basics_bottoms",
                        "men_basics_bottoms"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_basics",
                    "men_basics"
                  ]
                },
                {
                  "CatName": "Hoodies & Sweatshirts",
                  "CategoryValue": "hoodies-and-sweatshirts",
                  "CategoriesArray": [
                    {
                      "CatName": "Hoodies",
                      "CategoryValue": "hoodies",
                      "tagCodes": [
                        "men_hoodiessweatshirts_hoodies",
                        "men_hoodiessweatshirts_hoodies"
                      ]
                    },
                    {
                      "CatName": "Sweatshirts",
                      "CategoryValue": "sweatshirts",
                      "tagCodes": [
                        "men_hoodiessweatshirts_sweatshirts",
                        "men_hoodiessweatshirts_sweatshirts"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_hoodiessweatshirts",
                    "men_hoodiessweatshirts"
                  ]
                },
                {
                  "CatName": "Shirts",
                  "CategoryValue": "shirts",
                  "CategoriesArray": [
                    {
                      "CatName": "Long Sleeve",
                      "CategoryValue": "long-sleeve",
                      "tagCodes": [
                        "men_shirts_longsleeved",
                        "men_shirts_longsleeved"
                      ]
                    },
                    {
                      "CatName": "Casual Shirts",
                      "CategoryValue": "casual",
                      "tagCodes": [
                        "men_shirts_casual",
                        "men_shirts_casual"
                      ]
                    },
                    {
                      "CatName": "Smart Shirts",
                      "CategoryValue": "dressed",
                      "tagCodes": [
                        "men_shirts_dressed",
                        "men_shirts_dressed"
                      ]
                    },
                    {
                      "CatName": "Denim Shirts",
                      "CategoryValue": "denim",
                      "tagCodes": [
                        "men_shirts_denim",
                        "men_shirts_denim"
                      ]
                    },
                    {
                      "CatName": "Short Sleeve",
                      "CategoryValue": "short-sleeve",
                      "tagCodes": [
                        "men_shirts_shortsleeved",
                        "men_shirts_shortsleeved"
                      ]
                    },
                    {
                      "CatName": "Flannel Shirts",
                      "CategoryValue": "flannel",
                      "tagCodes": [
                        "men_shirts_flannel",
                        "men_shirts_flannel"
                      ]
                    },
                    {
                      "CatName": "Linen Shirts",
                      "CategoryValue": "linen",
                      "tagCodes": [
                        "men_shirts_linenshirts",
                        "men_shirts_linenshirts"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_shirts",
                    "men_shirts"
                  ]
                },
                {
                  "CatName": "Trousers",
                  "CategoryValue": "trousers",
                  "CategoriesArray": [
                    {
                      "CatName": "Men's Trousers",
                      "CategoryValue": "trousers",
                      "tagCodes": [
                        "men_trousers_trousers",
                        "men_trousers_casual"
                      ]
                    },
                    {
                      "CatName": "Chinos",
                      "CategoryValue": "chinos",
                      "tagCodes": [
                        "men_trousers_chinos",
                        "men_trousers_chinos"
                      ]
                    },
                    {
                      "CatName": "Joggers",
                      "CategoryValue": "joggers",
                      "tagCodes": [
                        "men_trousers_joggers",
                        "men_trousers_joggers"
                      ]
                    },
                    {
                      "CatName": "Cargo trousers",
                      "CategoryValue": "cargo-trousers",
                      "tagCodes": [
                        "men_trousers_cargo",
                        "men_trousers_cargo"
                      ]
                    },
                    {
                      "CatName": "Smart Trousers",
                      "CategoryValue": "smart-trousers",
                      "tagCodes": [
                        "men_trousers_dressed",
                        "men_trousers_dressed"
                      ]
                    },
                    {
                      "CatName": "Linen Trousers",
                      "CategoryValue": "linen",
                      "tagCodes": [
                        "men_trousers_linentrousers",
                        "men_trousers_linentrousers"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_trousers",
                    "men_trousers"
                  ]
                },
                {
                  "CatName": "Jeans",
                  "CategoryValue": "jeans",
                  "CategoriesArray": [
                    {
                      "CatName": "Joggers",
                      "CategoryValue": "joggers",
                      "tagCodes": [
                        "men_jeans_joggers",
                        "men_jeans_joggers"
                      ]
                    },
                    {
                      "CatName": "Skinny",
                      "CategoryValue": "skinny",
                      "tagCodes": [
                        "men_jeans_skinny",
                        "men_jeans_skinny"
                      ]
                    },
                    {
                      "CatName": "Slim",
                      "CategoryValue": "slim",
                      "tagCodes": [
                        "men_jeans_slim",
                        "men_jeans_slim"
                      ]
                    },
                    {
                      "CatName": "Regular Fit",
                      "CategoryValue": "regular",
                      "tagCodes": [
                        "men_jeans_regular",
                        "men_jeans_regular"
                      ]
                    },
                    {
                      "CatName": "Relaxed Fit",
                      "CategoryValue": "relaxed",
                      "tagCodes": [
                        "men_jeans_relaxed",
                        "men_jeans_relaxed"
                      ]
                    },
                    {
                      "CatName": "Straight",
                      "CategoryValue": "straight",
                      "tagCodes": [
                        "men_jeans_straight",
                        "men_jeans_straight"
                      ]
                    },
                    {
                      "CatName": "Tapered",
                      "CategoryValue": "tapered",
                      "tagCodes": [
                        "men_jeans_tapered",
                        "men_jeans_tapered"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_jeans",
                    "men_jeans"
                  ]
                },
                {
                  "CatName": "Shorts",
                  "CategoryValue": "shorts",
                  "CategoriesArray": [
                    {
                      "CatName": "Linen",
                      "CategoryValue": "linen-shorts",
                      "tagCodes": [
                        "men_shorts_linen",
                        "men_shorts_linen"
                      ]
                    },
                    {
                      "CatName": "Jogger Shorts",
                      "CategoryValue": "jogger",
                      "tagCodes": [
                        "men_shorts_joggers",
                        "men_shorts_joggers"
                      ]
                    },
                    {
                      "CatName": "Denim shorts",
                      "CategoryValue": "jeans-shorts",
                      "tagCodes": [
                        "men_shorts_denim",
                        "men_shorts_jeansshorts"
                      ]
                    },
                    {
                      "CatName": "Chino Shorts",
                      "CategoryValue": "chino-shorts",
                      "tagCodes": [
                        "men_shorts_chinos",
                        "men_shorts_chinos"
                      ]
                    },
                    {
                      "CatName": "Cargo Shorts",
                      "CategoryValue": "cargo-shorts",
                      "tagCodes": [
                        "men_shorts_cargo",
                        "men_shorts_cargo"
                      ]
                    },
                    {
                      "CatName": "Casual shorts",
                      "CategoryValue": "casual",
                      "tagCodes": [
                        "men_shorts_casual",
                        "men_shorts_casual"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_shorts",
                    "men_shorts"
                  ]
                },
                {
                  "CatName": "Knitwear",
                  "CategoryValue": "knitwear",
                  "tagCodes": [
                    "men_knitwear",
                    "men_knitwear"
                  ]
                },
                {
                  "CatName": "Jackets & Coats",
                  "CategoryValue": "jackets-and-coats",
                  "CategoriesArray": [
                    {
                      "CatName": "Gilets",
                      "CategoryValue": "vest-jackets",
                      "tagCodes": [
                        "men_jacketscoats_vests",
                        "men_jacketscoats_vests"
                      ]
                    },
                    {
                      "CatName": "Linen",
                      "CategoryValue": "linen",
                      "tagCodes": [
                        "men_jacketscoats_linen",
                        "men_jacketscoats_linen"
                      ]
                    },
                    {
                      "CatName": "Outdoor",
                      "CategoryValue": "function",
                      "tagCodes": [
                        "men_jacketscoats_function",
                        "men_jacketscoats_function"
                      ]
                    },
                    {
                      "CatName": "Jackets For Men | Leather, Puffer & Denim",
                      "CategoryValue": "jackets",
                      "tagCodes": [
                        "men_jacketscoats_jackets",
                        "men_jacketscoats_jackets"
                      ]
                    },
                    {
                      "CatName": "Coats",
                      "CategoryValue": "coats",
                      "tagCodes": [
                        "men_jacketscoats_coats",
                        "men_jacketscoats_coats"
                      ]
                    },
                    {
                      "CatName": "Bomber Jackets",
                      "CategoryValue": "bomber-jackets",
                      "tagCodes": [
                        "men_jacketscoats_bomberjackets",
                        "men_jacketscoats_bomberjackets"
                      ]
                    },
                    {
                      "CatName": "Denim jacket",
                      "CategoryValue": "denim-jacket",
                      "tagCodes": [
                        "men_jacketscoats_denimjackets",
                        "men_jacketscoats_denimjackets"
                      ]
                    },
                    {
                      "CatName": "Biker Jackets",
                      "CategoryValue": "biker-jackets",
                      "tagCodes": [
                        "men_jacketscoats_bikerjackets",
                        "men_jacketscoats_bikerjackets"
                      ]
                    },
                    {
                      "CatName": "Windbreakers",
                      "CategoryValue": "windbreakers",
                      "tagCodes": [
                        "men_jacketscoats_windbreakerjackets",
                        "men_jacketscoats_windbreakerjackets"
                      ]
                    },
                    {
                      "CatName": "Puffer Jackets",
                      "CategoryValue": "puffer",
                      "tagCodes": [
                        "men_jacketscoats_puffer",
                        "men_jacketscoats_puffer"
                      ]
                    },
                    {
                      "CatName": "Overshirts",
                      "CategoryValue": "shirt-jackets",
                      "tagCodes": [
                        "men_jacketscoats_shirtjackets",
                        "men_jacketscoats_shirtjackets"
                      ]
                    },
                    {
                      "CatName": "Trench Coats",
                      "CategoryValue": "trench-coats",
                      "tagCodes": [
                        "men_jacketscoats_trenchcoats",
                        "men_jacketscoats_trenchcoats"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_jacketscoats",
                    "men_jacketscoats"
                  ]
                },
                {
                  "CatName": "Blazers & Suits",
                  "CategoryValue": "blazers-and-suits",
                  "CategoriesArray": [
                    {
                      "CatName": "Waistcoats",
                      "CategoryValue": "waistcoats",
                      "tagCodes": [
                        "men_blazerssuits_waistcoats",
                        "men_blazerssuits_waistcoats"
                      ]
                    },
                    {
                      "CatName": "Blazers",
                      "CategoryValue": "blazers",
                      "CategoriesArray": [
                        {
                          "CatName": "Linen",
                          "CategoryValue": "linen",
                          "tagCodes": [
                            "men_blazerssuits_blazers_linen",
                            "men_blazerssuits_blazers_linen"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "men_blazerssuits_blazers",
                        "men_blazerssuits_blazers"
                      ]
                    },
                    {
                      "CatName": "Men's Suits | Three-Piece Suits",
                      "CategoryValue": "suits",
                      "tagCodes": [
                        "men_blazerssuits_suits",
                        "men_blazerssuits_suits"
                      ]
                    },
                    {
                      "CatName": "Suit Trousers",
                      "CategoryValue": "suit-pants",
                      "tagCodes": [
                        "men_blazerssuits_trousers",
                        "men_blazerssuits_trousers"
                      ]
                    },
                    {
                      "CatName": "Premium Quality",
                      "CategoryValue": "premium-quality",
                      "tagCodes": [
                        "men_blazerssuits_premium_quality",
                        "men_blazerssuits_premium_quality"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_blazerssuits",
                    "men_blazerssuits"
                  ]
                },
                {
                  "CatName": "Cardigans & Jumpers",
                  "CategoryValue": "cardigans-and-jumpers",
                  "CategoriesArray": [
                    {
                      "CatName": "Cardigans",
                      "CategoryValue": "cardigans",
                      "tagCodes": [
                        "men_cardigansjumpers_cardigans",
                        "men_cardigansjumpers_cardigans"
                      ]
                    },
                    {
                      "CatName": "Jumpers",
                      "CategoryValue": "jumpers",
                      "tagCodes": [
                        "men_cardigansjumpers_jumpers",
                        "men_cardigansjumpers_jumpers"
                      ]
                    },
                    {
                      "CatName": "Turtleneck",
                      "CategoryValue": "turtleneck",
                      "tagCodes": [
                        "men_cardigansjumpers_turtleneck",
                        "men_cardigansjumpers_turtleneck"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_cardigansjumpers",
                    "men_cardigansjumpers"
                  ]
                },
                {
                  "CatName": "Sportswear",
                  "CategoryValue": "hm-sport",
                  "CategoriesArray": [
                    {
                      "CatName": "Trousers & Joggers",
                      "CategoryValue": "trousers-joggers",
                      "tagCodes": [
                        "men_sport_bottoms_trousers",
                        "men_sport_bottoms_trousers"
                      ]
                    },
                    {
                      "CatName": "Shorts",
                      "CategoryValue": "shorts",
                      "tagCodes": [
                        "men_sport_bottoms_shorts",
                        "men_sport_bottoms_shorts"
                      ]
                    },
                    {
                      "CatName": "Leggings & Tights",
                      "CategoryValue": "leggings-tights",
                      "tagCodes": [
                        "men_sport_bottoms_leggingstights",
                        "men_sport_bottoms_leggingstights"
                      ]
                    },
                    {
                      "CatName": "T-shirts & Tops",
                      "CategoryValue": "tops",
                      "tagCodes": [
                        "men_sport_tops",
                        "men_sport_tops"
                      ]
                    },
                    {
                      "CatName": "Jackets",
                      "CategoryValue": "jackets",
                      "tagCodes": [
                        "men_sport_jackets",
                        "men_sport_jackets"
                      ]
                    },
                    {
                      "CatName": "Bottoms ",
                      "CategoryValue": "bottoms",
                      "tagCodes": [
                        "men_sport_bottoms",
                        "men_sport_bottoms"
                      ]
                    },
                    {
                      "CatName": "Accessories",
                      "CategoryValue": "sport-accessories",
                      "tagCodes": [
                        "men_sport_sportaccessories",
                        "men_sport_sportaccessories"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_sport",
                    "men_sport"
                  ]
                },
                {
                  "CatName": "Swimwear",
                  "CategoryValue": "swimwear",
                  "tagCodes": [
                    "men_swimweear",
                    "men_swimweear"
                  ]
                },
                {
                  "CatName": "Underwear",
                  "CategoryValue": "underwear",
                  "CategoriesArray": [
                    {
                      "CatName": "Boxers",
                      "CategoryValue": "boxers",
                      "tagCodes": [
                        "men_underwear_boxers",
                        "men_underwear_boxers"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_underwear",
                    "men_underwear"
                  ]
                },
                {
                  "CatName": "Nightwear & Loungewear",
                  "CategoryValue": "nightwear-loungewear",
                  "CategoriesArray": [
                    {
                      "CatName": "Pyjamas",
                      "CategoryValue": "pyjamas",
                      "tagCodes": [
                        "men_nightwearloungewear_pyjamas",
                        "men_nightwearloungewear_pyjamas"
                      ]
                    },
                    {
                      "CatName": "Dressing gowns",
                      "CategoryValue": "dressing-gowns",
                      "tagCodes": [
                        "men_nightwearloungewear_dressing_gowns_bathrobes",
                        "men_nightwearloungewear_dressing_gowns_bathrobes"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_nightwearloungewear",
                    "men_nightwearloungewear"
                  ]
                },
                {
                  "CatName": "Socks",
                  "CategoryValue": "socks",
                  "CategoriesArray": [
                    {
                      "CatName": "Sports Socks",
                      "CategoryValue": "sports-socks",
                      "tagCodes": [
                        "men_socks_sport",
                        "men_socks_sport"
                      ]
                    },
                    {
                      "CatName": "Trainer Socks",
                      "CategoryValue": "sneaker-socks",
                      "tagCodes": [
                        "men_socks_sneakers",
                        "men_socks_sneakers"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_socks",
                    "men_socks"
                  ]
                },
                {
                  "CatName": "Shoes",
                  "CategoryValue": "shoes",
                  "CategoriesArray": [
                    {
                      "CatName": "Slippers",
                      "CategoryValue": "slippers",
                      "tagCodes": [
                        "men_shoes_slippers",
                        "men_shoes_slippers"
                      ]
                    },
                    {
                      "CatName": "Trainers",
                      "CategoryValue": "sneakers",
                      "tagCodes": [
                        "men_shoes_sneakers",
                        "men_shoes_sneakers"
                      ]
                    },
                    {
                      "CatName": "Sandals & Espadrilles",
                      "CategoryValue": "sandals-and-espandrillos",
                      "tagCodes": [
                        "men_shoes_sandals_espandrillos",
                        "men_shoes_sandals_espandrillos"
                      ]
                    },
                    {
                      "CatName": "Boots",
                      "CategoryValue": "boots",
                      "tagCodes": [
                        "men_shoes_boots",
                        "men_shoes_boots"
                      ]
                    },
                    {
                      "CatName": "Smart Shoes",
                      "CategoryValue": "smart-shoes",
                      "tagCodes": [
                        "men_shoes_dressed",
                        "men_shoes_dressed"
                      ]
                    },
                    {
                      "CatName": "Loafers",
                      "CategoryValue": "loafers",
                      "tagCodes": [
                        "men_shoes_loafers",
                        "men_shoes_loafers"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_shoes",
                    "men_shoes"
                  ]
                },
                {
                  "CatName": "Accessories",
                  "CategoryValue": "accessories",
                  "CategoriesArray": [
                    {
                      "CatName": "Ties, Bow tie & Handkerchiefs",
                      "CategoryValue": "ties-bow-tie-and-handkerchiefs",
                      "tagCodes": [
                        "men_accessories_ties_bowties_handkerchiefs",
                        "men_accessories_ties_bowties_handkerchiefs"
                      ]
                    },
                    {
                      "CatName": "Belts & Suspenders",
                      "CategoryValue": "belts-and-suspenders",
                      "tagCodes": [
                        "men_accessories_beltsandbraces",
                        "men_accessories_beltsandbraces"
                      ]
                    },
                    {
                      "CatName": "Bags",
                      "CategoryValue": "bags",
                      "CategoriesArray": [
                        {
                          "CatName": "Waist Bags",
                          "CategoryValue": "waist-bags",
                          "tagCodes": [
                            "men_accessories_bags_waistbags",
                            "men_accessories_bags_waistbags"
                          ]
                        },
                        {
                          "CatName": "Travel Bag",
                          "CategoryValue": "travel-bag",
                          "tagCodes": [
                            "men_accessories_bags_weekendbag",
                            "men_accessories_bags_weekendbag"
                          ]
                        },
                        {
                          "CatName": "Backpack",
                          "CategoryValue": "backpack",
                          "tagCodes": [
                            "men_accessories_bags_backpack",
                            "men_accessories_bags_backpack"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "men_accessories_bags",
                        "men_accessories_bags"
                      ]
                    },
                    {
                      "CatName": "Sunglasses",
                      "CategoryValue": "sunglasses",
                      "tagCodes": [
                        "men_accessories_sunglasses",
                        "men_accessories_sunglasses"
                      ]
                    },
                    {
                      "CatName": "Jewellery",
                      "CategoryValue": "jewellery",
                      "tagCodes": [
                        "men_accessories_jewellery",
                        "men_accessories_jewellery"
                      ]
                    },
                    {
                      "CatName": "Sports Accessories",
                      "CategoryValue": "sports-accessories",
                      "tagCodes": [
                        "men_accessories_sportsaccessories",
                        "men_accessories_sportsaccessories"
                      ]
                    },
                    {
                      "CatName": "Hats & Caps",
                      "CategoryValue": "hats-caps",
                      "CategoriesArray": [
                        {
                          "CatName": "Beanies",
                          "CategoryValue": "beanies",
                          "tagCodes": [
                            "men_accessories_hatscaps_beanie",
                            "men_accessories_hatscaps_beanie"
                          ]
                        },
                        {
                          "CatName": "Caps",
                          "CategoryValue": "caps",
                          "tagCodes": [
                            "men_accessories_hatscaps_caps",
                            "men_accessories_hatscaps_caps"
                          ]
                        },
                        {
                          "CatName": "Hats",
                          "CategoryValue": "hats",
                          "tagCodes": [
                            "men_accessories_hatscaps_hats",
                            "men_accessories_hatscaps_hats"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "men_accessories_hatscaps",
                        "men_accessories_hatscaps"
                      ]
                    },
                    {
                      "CatName": "Gloves",
                      "CategoryValue": "gloves",
                      "tagCodes": [
                        "men_accessories_gloves",
                        "men_accessories_gloves"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_accessories",
                    "men_accessories"
                  ]
                },
                {
                  "CatName": "Care products",
                  "CategoryValue": "care-products",
                  "tagCodes": [
                    "men_takecare",
                    "men_takecare"
                  ]
                }
              ],
              "tagCodes": []
            },
            {
              "CatName": "Trending now",
              "CategoryValue": "seasonal-trending",
              "CategoriesArray": [
                {
                  "CatName": "Casual Workwear",
                  "CategoryValue": "casual-workwear",
                  "tagCodes": [
                    "MCAM_SGMY_S5_FP_WORKWEAR_CASUAL",
                    "MCAM_SGMY_S5_FP_WORKWEAR_CASUAL"
                  ]
                },
                {
                  "CatName": "Linen Clothing",
                  "CategoryValue": "linen",
                  "tagCodes": [
                    "men_essentials_linen",
                    "men_linenclothing",
                    "men_essentials_linen"
                  ]
                },
                {
                  "CatName": "Music, Movies & Logos",
                  "CategoryValue": "licence",
                  "tagCodes": [
                    "men_licence",
                    "men_licence"
                  ]
                },
                {
                  "CatName": "Multipacks",
                  "CategoryValue": "multipacks",
                  "tagCodes": [
                    "men_multipacks",
                    "men_multipacks"
                  ]
                },
                {
                  "CatName": "Socks 3 for 2",
                  "CategoryValue": "socks-3-for-2",
                  "tagCodes": [
                    "GLOBAL_SOCKS_342"
                  ]
                },
                {
                  "CatName": "The Spring Shop",
                  "CategoryValue": "spring",
                  "tagCodes": [
                    "men_springshop",
                    "MCAM_SGMY_S5_FP_SPRINGCASUAL",
                    "men_springshop",
                    "MCAM_SGMY_S5_FP_SPRINGCASUAL"
                  ]
                }
              ],
              "tagCodes": []
            },
            {
              "CatName": "Shop by Concept",
              "CategoryValue": "shop-by-concept",
              "CategoriesArray": [
                {
                  "CatName": "Modern Classic",
                  "CategoryValue": "modern-classic",
                  "CategoriesArray": [
                    {
                      "CatName": "Blazers & Suits",
                      "CategoryValue": "blazers-and-suits",
                      "tagCodes": [
                        "men_modernclassic_blazerssuits"
                      ]
                    },
                    {
                      "CatName": "Cardigans & Sweaters",
                      "CategoryValue": "cardigans-and-sweaters",
                      "tagCodes": [
                        "men_modernclassic_cardiganssweaters",
                        "men_modernclassic_cardigansjumpers"
                      ]
                    },
                    {
                      "CatName": "Jackets & Coats",
                      "CategoryValue": "jackets-and-coats",
                      "tagCodes": [
                        "men_modernclassic_jacketscoats",
                        "men_modernclassic_outerwear"
                      ]
                    },
                    {
                      "CatName": "Shirts",
                      "CategoryValue": "shirts",
                      "tagCodes": [
                        "men_modernclassic_shirts"
                      ]
                    },
                    {
                      "CatName": "Trousers",
                      "CategoryValue": "trousers",
                      "tagCodes": [
                        "men_modernclassic_trousers",
                        "men_modernclassic_bottoms"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_modernclassic"
                  ]
                },
                {
                  "CatName": "Divided",
                  "CategoryValue": "divided",
                  "CategoriesArray": [
                    {
                      "CatName": "Bottoms",
                      "CategoryValue": "bottoms",
                      "tagCodes": [
                        "men_divided_bottoms"
                      ]
                    },
                    {
                      "CatName": "Jackets & Blazers",
                      "CategoryValue": "jackets-and-blazers",
                      "tagCodes": [
                        "men_divided_jacketsandblazers"
                      ]
                    },
                    {
                      "CatName": "Jumpers & Sweatshirts",
                      "CategoryValue": "jumpers-and-sweatshirts",
                      "tagCodes": [
                        "men_divided_jumpersandsweatshirts"
                      ]
                    },
                    {
                      "CatName": "T-shirts & Shirts",
                      "CategoryValue": "tshirts-and-shirts",
                      "tagCodes": [
                        "men_divided_tshirtandshirts"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "men_divided"
                  ]
                },
                {
                  "CatName": "Casual Wear",
                  "CategoryValue": "logg",
                  "tagCodes": []
                },
                {
                  "CatName": "Basics",
                  "CategoryValue": "basics",
                  "tagCodes": [
                    "men_basics"
                  ]
                },
                {
                  "CatName": "Conscious - Sustainable Style",
                  "CategoryValue": "conscious",
                  "tagCodes": [
                    "men_conscious"
                  ]
                }
              ],
              "tagCodes": []
            }
          ],
          "tagCodes": [
            "men_all"
          ]
        },
        {
          "CatName": "Baby",
          "CategoryValue": "baby",
          "CategoriesArray": [
            {
              "CatName": "Newborn",
              "CategoryValue": "newborn",
              "CategoriesArray": [
                {
                  "CatName": "View all",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "kids_new_born_viewall",
                    "kids_new_born_viewall"
                  ]
                },
                {
                  "CatName": "New Arrivals",
                  "CategoryValue": "new-arrivals",
                  "tagCodes": [
                    "kids_new_born_newarrivals",
                    "kids_new_born_newarrivals"
                  ]
                },
                {
                  "CatName": "Clothing",
                  "CategoryValue": "clothing",
                  "CategoriesArray": [
                    {
                      "CatName": "Sets & Outfits",
                      "CategoryValue": "sets-outfits",
                      "tagCodes": [
                        "kids_new_born_setsoutfits",
                        "kids_new_born_setsoutfits"
                      ]
                    },
                    {
                      "CatName": "Bodysuits",
                      "CategoryValue": "bodysuits",
                      "tagCodes": [
                        "kids_new_born_clothing_bodysuits",
                        "kids_new_born_clothing_bodysuits"
                      ]
                    },
                    {
                      "CatName": "Tops & T-Shirts",
                      "CategoryValue": "tops-t-shirts",
                      "tagCodes": [
                        "kids_new_born_clothing_topstshirts",
                        "kids_new_born_clothing_topstshirts"
                      ]
                    },
                    {
                      "CatName": "Jumpers & Cardigans",
                      "CategoryValue": "jumpers-cardigans",
                      "tagCodes": [
                        "kids_new_born_clothing_jumperssweatshirts",
                        "kids_new_born_clothing_jumperssweatshirts"
                      ]
                    },
                    {
                      "CatName": "Trousers & Leggings",
                      "CategoryValue": "trousers-leggings",
                      "tagCodes": [
                        "kids_new_born_clothing_trousersleggings",
                        "kids_new_born_clothing_trousersleggings"
                      ]
                    },
                    {
                      "CatName": "Shorts",
                      "CategoryValue": "shorts",
                      "tagCodes": [
                        "kids_new_born_clothing_shorts",
                        "kids_new_born_clothing_shorts"
                      ]
                    },
                    {
                      "CatName": "Dresses & Skirts",
                      "CategoryValue": "dresses",
                      "tagCodes": [
                        "kids_new_born_clothing_dresses",
                        "kids_new_born_clothing_dresses"
                      ]
                    },
                    {
                      "CatName": "Nightwear",
                      "CategoryValue": "nightwear",
                      "tagCodes": [
                        "kids_new_born_clothing_nightwear",
                        "kids_new_born_clothing_nightwear"
                      ]
                    },
                    {
                      "CatName": "Socks & Tights",
                      "CategoryValue": "socks-tights",
                      "tagCodes": [
                        "kids_new_born_clothing_sockstights",
                        "kids_new_born_clothing_sockstights"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_new_born_clothing",
                    "kids_new_born_clothing"
                  ]
                },
                {
                  "CatName": "Accessories",
                  "CategoryValue": "accessories",
                  "tagCodes": [
                    "kids_new_born_accessories",
                    "kids_new_born_accessories"
                  ]
                },
                {
                  "CatName": "Outerwear",
                  "CategoryValue": "outerwear",
                  "tagCodes": [
                    "kids_new_born_outerwear",
                    "kids_new_born_outerwear"
                  ]
                },
                {
                  "CatName": "Shoes",
                  "CategoryValue": "shoes",
                  "tagCodes": [
                    "kids_new_born_shoes",
                    "kids_new_born_shoes"
                  ]
                }
              ],
              "tagCodes": [
                "kids_new_born_viewall",
                "kids_new_born_viewall"
              ]
            },
            {
              "CatName": "Baby Girl",
              "CategoryValue": "girls",
              "CategoriesArray": [
                {
                  "CatName": "View all",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "kids_baby_girl_viewall",
                    "kids_baby_girl_viewall"
                  ]
                },
                {
                  "CatName": "New Arrivals",
                  "CategoryValue": "new-arrivals",
                  "tagCodes": [
                    "kids_baby_girl_newarrivals",
                    "kids_baby_girl_newarrivals"
                  ]
                },
                {
                  "CatName": "Clothing",
                  "CategoryValue": "clothing",
                  "CategoriesArray": [
                    {
                      "CatName": "Dresses",
                      "CategoryValue": "dresses",
                      "tagCodes": [
                        "kids_baby_girl_clothing_dresses",
                        "kids_baby_girl_clothing_dresses"
                      ]
                    },
                    {
                      "CatName": "Sets & Outfits",
                      "CategoryValue": "sets-outfits",
                      "tagCodes": [
                        "kids_baby_girl_setsoutfits",
                        "kids_baby_girl_setsoutfits"
                      ]
                    },
                    {
                      "CatName": "Tops & T-Shirts",
                      "CategoryValue": "tops-t-shirts",
                      "CategoriesArray": [
                        {
                          "CatName": "T-Shirts",
                          "CategoryValue": "t-shirts",
                          "tagCodes": [
                            "kids_baby_girl_clothing_tops_tshirts",
                            "kids_baby_girl_clothing_tops_tshirts"
                          ]
                        },
                        {
                          "CatName": "Blouses",
                          "CategoryValue": "blouses",
                          "tagCodes": [
                            "kids_baby_girl_clothing_tops_blouses",
                            "kids_baby_girl_clothing_tops_blouses"
                          ]
                        },
                        {
                          "CatName": "Tank Tops & Vests",
                          "CategoryValue": "tank-tops",
                          "tagCodes": [
                            "kids_baby_girl_clothing_tops_tanktops",
                            "kids_baby_girl_clothing_tops_tanktops"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_baby_girl_clothing_tops",
                        "kids_baby_girl_clothing_tops"
                      ]
                    },
                    {
                      "CatName": "Jumpers & Cardigans",
                      "CategoryValue": "jumpers-cardigans",
                      "CategoriesArray": [
                        {
                          "CatName": "Jumpers",
                          "CategoryValue": "jumpers",
                          "tagCodes": [
                            "kids_baby_girl_clothing_jumperssweatshirts_jumpers",
                            "kids_baby_girl_clothing_jumperssweatshirts_jumpers"
                          ]
                        },
                        {
                          "CatName": "Cardigans",
                          "CategoryValue": "cardigans",
                          "tagCodes": [
                            "kids_baby_girl_clothing_jumperssweatshirts_cardigans",
                            "kids_baby_girl_clothing_jumperssweatshirts_cardigans"
                          ]
                        },
                        {
                          "CatName": "Hoodies",
                          "CategoryValue": "hoodies",
                          "tagCodes": [
                            "kids_baby_girl_clothing_jumperssweatshirts_hoodies",
                            "kids_baby_girl_clothing_jumperssweatshirts_hoodies"
                          ]
                        },
                        {
                          "CatName": "Sweatshirts",
                          "CategoryValue": "sweatshirts",
                          "tagCodes": [
                            "kids_baby_girl_clothing_jumperssweatshirts_sweatshirts",
                            "kids_baby_girl_clothing_jumperssweatshirts_sweatshirts"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_baby_girl_clothing_jumperssweatshirts",
                        "kids_baby_girl_clothing_jumperssweatshirts"
                      ]
                    },
                    {
                      "CatName": "Trousers & Jeans",
                      "CategoryValue": "trousers-jeans",
                      "CategoriesArray": [
                        {
                          "CatName": "Joggers & Sweatpants",
                          "CategoryValue": "joggers-sweatpants",
                          "tagCodes": [
                            "kids_baby_girl_clothing_trousersjeans_joggerssweatpants",
                            "kids_baby_girl_clothing_trousersjeans_joggerssweatpants"
                          ]
                        },
                        {
                          "CatName": "Trousers",
                          "CategoryValue": "trousers",
                          "tagCodes": [
                            "kids_baby_girl_clothing_trousersjeans_trousers",
                            "kids_baby_girl_clothing_trousersjeans_trousers"
                          ]
                        },
                        {
                          "CatName": "Leggings",
                          "CategoryValue": "leggings",
                          "tagCodes": [
                            "kids_baby_girl_clothing_trousersjeans_leggingstreggins",
                            "kids_baby_girl_clothing_trousersjeans_leggingstreggins"
                          ]
                        },
                        {
                          "CatName": "Jeans & Jeggings",
                          "CategoryValue": "jeans",
                          "tagCodes": [
                            "kids_baby_girl_clothing_trousersjeans_jeans",
                            "kids_baby_girl_clothing_trousersjeans_jeans"
                          ]
                        },
                        {
                          "CatName": "Dungarees",
                          "CategoryValue": "dungarees",
                          "tagCodes": [
                            "kids_baby_girl_clothing_trousersjeans_dungarees",
                            "kids_baby_girl_clothing_trousersjeans_dungarees"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_baby_girl_clothing_trousersjeans",
                        "kids_baby_girl_clothing_trousersjeans"
                      ]
                    },
                    {
                      "CatName": "Bodysuits",
                      "CategoryValue": "bodysuits",
                      "tagCodes": [
                        "kids_baby_girl_clothing_bodysuits",
                        "kids_baby_girl_clothing_bodysuits"
                      ]
                    },
                    {
                      "CatName": "Jumpsuits & Playsuits",
                      "CategoryValue": "rompers",
                      "tagCodes": [
                        "kids_baby_girl_clothing_jumpsuitsplaysuits",
                        "kids_baby_girl_clothing_jumpsuitsplaysuits"
                      ]
                    },
                    {
                      "CatName": "Shorts",
                      "CategoryValue": "shorts",
                      "tagCodes": [
                        "kids_baby_girl_clothing_shorts",
                        "kids_baby_girl_clothing_shorts"
                      ]
                    },
                    {
                      "CatName": "Nightwear",
                      "CategoryValue": "nightwear",
                      "tagCodes": [
                        "kids_baby_girl_clothing_nightwear",
                        "kids_baby_girl_clothing_nightwear"
                      ]
                    },
                    {
                      "CatName": "Socks & Tights",
                      "CategoryValue": "socks-tights",
                      "CategoriesArray": [
                        {
                          "CatName": "Socks",
                          "CategoryValue": "socks",
                          "tagCodes": [
                            "kids_baby_girl_clothing_sockstights_socks",
                            "kids_baby_girl_clothing_sockstights_socks"
                          ]
                        },
                        {
                          "CatName": "Tights",
                          "CategoryValue": "tights",
                          "tagCodes": [
                            "kids_baby_girl_clothing_sockstights_tights",
                            "kids_baby_girl_clothing_sockstights_tights"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_baby_girl_clothing_sockstights",
                        "kids_baby_girl_clothing_sockstights"
                      ]
                    },
                    {
                      "CatName": "Swimwear",
                      "CategoryValue": "swimwear",
                      "tagCodes": [
                        "kids_baby_girl_clothing_swimwear",
                        "kids_baby_girl_clothing_swimwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_baby_girl_clothing",
                    "kids_baby_girl_clothing"
                  ]
                },
                {
                  "CatName": "Outerwear",
                  "CategoryValue": "outerwear",
                  "CategoriesArray": [
                    {
                      "CatName": "Jackets & Coats",
                      "CategoryValue": "jackets-coats",
                      "tagCodes": [
                        "kids_baby_girl_outerwear_jacketscoats",
                        "kids_baby_girl_outerwear_jacketscoats"
                      ]
                    },
                    {
                      "CatName": "Snowsuits",
                      "CategoryValue": "snowsuits",
                      "tagCodes": [
                        "kids_baby_girl_outerwear_snowsuits",
                        "kids_baby_girl_outerwear_snowsuits"
                      ]
                    },
                    {
                      "CatName": "Trousers",
                      "CategoryValue": "trousers",
                      "tagCodes": [
                        "kids_baby_girl_outerwear_trousers",
                        "kids_baby_girl_outerwear_trousers"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_baby_girl_outerwear",
                    "kids_baby_girl_outerwear"
                  ]
                },
                {
                  "CatName": "Accessories",
                  "CategoryValue": "accessories",
                  "CategoriesArray": [
                    {
                      "CatName": "Hats",
                      "CategoryValue": "hats",
                      "tagCodes": [
                        "kids_baby_girl_accessories_hats",
                        "kids_baby_girl_accessories_hats"
                      ]
                    },
                    {
                      "CatName": "Scarves & Gloves",
                      "CategoryValue": "scarves-gloves",
                      "tagCodes": [
                        "kids_baby_girl_accessories_scarvesgloves",
                        "kids_baby_girl_accessories_scarvesgloves"
                      ]
                    },
                    {
                      "CatName": "Bibs",
                      "CategoryValue": "bibs",
                      "tagCodes": [
                        "kids_baby_girl_accessories_bibs",
                        "kids_baby_girl_accessories_bibs"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_baby_girl_accessories",
                    "kids_baby_girl_accessories"
                  ]
                },
                {
                  "CatName": "Shoes",
                  "CategoryValue": "shoes",
                  "CategoriesArray": [
                    {
                      "CatName": "Trainers",
                      "CategoryValue": "trainers",
                      "tagCodes": [
                        "kids_baby_girl_shoes_trainers",
                        "kids_baby_girl_shoes_trainers"
                      ]
                    },
                    {
                      "CatName": "Ballet Pumps & Flats",
                      "CategoryValue": "ballerinas-flats",
                      "tagCodes": [
                        "kids_baby_girl_shoes_ballerinasflats"
                      ]
                    },
                    {
                      "CatName": "Boots",
                      "CategoryValue": "boots",
                      "tagCodes": [
                        "kids_baby_girl_shoes_boots"
                      ]
                    },
                    {
                      "CatName": "Sandals & Flip-Flops",
                      "CategoryValue": "sandals-flip-flops",
                      "tagCodes": [
                        "kids_baby_girl_shoes_sandalsflipflops"
                      ]
                    },
                    {
                      "CatName": "Slippers",
                      "CategoryValue": "slippers",
                      "tagCodes": [
                        "kids_baby_girl_shoes_slippers"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_baby_girl_shoes",
                    "kids_baby_girl_shoes"
                  ]
                },
                {
                  "CatName": "Fancy Dress Costumes",
                  "CategoryValue": "fancy-dress-costumes",
                  "tagCodes": [
                    "kids_baby_girl_costumesfancydresses",
                    "kids_baby_girl_costumesfancydresses"
                  ]
                }
              ],
              "tagCodes": [
                "kids_baby_girl_viewall"
              ]
            },
            {
              "CatName": "Baby Boy",
              "CategoryValue": "boys",
              "CategoriesArray": [
                {
                  "CatName": "View all",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "kids_baby_boy_viewall",
                    "kids_baby_boy_viewall"
                  ]
                },
                {
                  "CatName": "New Arrivals",
                  "CategoryValue": "new-arrivals",
                  "tagCodes": [
                    "kids_baby_boy_newarrivals",
                    "kids_baby_boy_newarrivals"
                  ]
                },
                {
                  "CatName": "Clothing",
                  "CategoryValue": "clothing",
                  "CategoriesArray": [
                    {
                      "CatName": "Sets & Outfits",
                      "CategoryValue": "sets-outfits",
                      "tagCodes": [
                        "kids_baby_boy_setsoutfits",
                        "kids_baby_boy_setsoutfits"
                      ]
                    },
                    {
                      "CatName": "T-shirts & Shirts",
                      "CategoryValue": "t-shirts-shirts",
                      "CategoriesArray": [
                        {
                          "CatName": "T-Shirts",
                          "CategoryValue": "t-shirts",
                          "tagCodes": [
                            "kids_baby_boy_clothing_tshirtsshirts_tshirts",
                            "kids_baby_boy_clothing_tshirtsshirts_tshirts"
                          ]
                        },
                        {
                          "CatName": "Shirts",
                          "CategoryValue": "shirts",
                          "tagCodes": [
                            "kids_baby_boy_clothing_tshirtsshirts_shirts",
                            "kids_baby_boy_clothing_tshirtsshirts_shirts"
                          ]
                        },
                        {
                          "CatName": "Tank Tops & Vests",
                          "CategoryValue": "tank-tops",
                          "tagCodes": [
                            "kids_baby_boy_clothing_tshirtsshirts_tanktops",
                            "kids_baby_boy_clothing_tshirtsshirts_tanktops"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_baby_boy_clothing_tshirtsshirts",
                        "kids_baby_boy_clothing_tshirtsshirts"
                      ]
                    },
                    {
                      "CatName": "Jumpers & Cardigans",
                      "CategoryValue": "jumpers-cardigans",
                      "CategoriesArray": [
                        {
                          "CatName": "Jumpers",
                          "CategoryValue": "jumpers",
                          "tagCodes": [
                            "kids_baby_boy_clothing_jumperssweatshirts_jumpers",
                            "kids_baby_boy_clothing_jumperssweatshirts_jumpers"
                          ]
                        },
                        {
                          "CatName": "Cardigans",
                          "CategoryValue": "cardigans",
                          "tagCodes": [
                            "kids_baby_boy_clothing_jumperssweatshirts_cardigans",
                            "kids_baby_boy_clothing_jumperssweatshirts_cardigans"
                          ]
                        },
                        {
                          "CatName": "Hoodies",
                          "CategoryValue": "hoodies",
                          "tagCodes": [
                            "kids_baby_boy_clothing_jumperssweatshirts_hoodies",
                            "kids_baby_boy_clothing_jumperssweatshirts_hoodies"
                          ]
                        },
                        {
                          "CatName": "Sweatshirts",
                          "CategoryValue": "sweatshirts",
                          "tagCodes": [
                            "kids_baby_boy_clothing_jumperssweatshirts_sweatshirts",
                            "kids_baby_boy_clothing_jumperssweatshirts_sweatshirts"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_baby_boy_clothing_jumperssweatshirts",
                        "kids_baby_boy_clothing_jumperssweatshirts"
                      ]
                    },
                    {
                      "CatName": "Trousers & Jeans",
                      "CategoryValue": "trousers-jeans",
                      "CategoriesArray": [
                        {
                          "CatName": "Joggers & Sweatpants",
                          "CategoryValue": "joggers-sweatpants",
                          "tagCodes": [
                            "kids_baby_boy_clothing_trousersjeans_joggerssweatpants",
                            "kids_baby_boy_clothing_trousersjeans_joggerssweatpants"
                          ]
                        },
                        {
                          "CatName": "Trousers",
                          "CategoryValue": "trousers",
                          "tagCodes": [
                            "kids_baby_boy_clothing_trousersjeans_trousers",
                            "kids_baby_boy_clothing_trousersjeans_trousers"
                          ]
                        },
                        {
                          "CatName": "Jeans",
                          "CategoryValue": "jeans",
                          "tagCodes": [
                            "kids_baby_boy_clothing_trousersjeans_jeans",
                            "kids_baby_boy_clothing_trousersjeans_jeans"
                          ]
                        },
                        {
                          "CatName": "Leggings",
                          "CategoryValue": "leggings",
                          "tagCodes": [
                            "kids_baby_boy_clothing_trousersjeans_leggingstreggings",
                            "kids_baby_boy_clothing_trousersjeans_leggingstreggings"
                          ]
                        },
                        {
                          "CatName": "Dungarees",
                          "CategoryValue": "dungarees",
                          "tagCodes": [
                            "kids_baby_boy_clothing_trousersjeans_dungarees",
                            "kids_baby_boy_clothing_trousersjeans_dungarees"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_baby_boy_clothing_trousersjeans",
                        "kids_baby_boy_clothing_trousersjeans"
                      ]
                    },
                    {
                      "CatName": "Bodysuits",
                      "CategoryValue": "bodysuits",
                      "tagCodes": [
                        "kids_baby_boy_clothing_bodysuits",
                        "kids_baby_boy_clothing_bodysuits"
                      ]
                    },
                    {
                      "CatName": "Jumpsuits & Playsuits",
                      "CategoryValue": "rompers",
                      "tagCodes": [
                        "kids_baby_boy_clothing_jumpsuitsplaysuits",
                        "kids_baby_boy_clothing_jumpsuitsplaysuits"
                      ]
                    },
                    {
                      "CatName": "Shorts",
                      "CategoryValue": "shorts",
                      "tagCodes": [
                        "kids_baby_boy_clothing_shorts",
                        "kids_baby_boy_clothing_shorts"
                      ]
                    },
                    {
                      "CatName": "Nightwear",
                      "CategoryValue": "nightwear",
                      "tagCodes": [
                        "kids_baby_boy_clothing_nightwear",
                        "kids_baby_boy_clothing_nightwear"
                      ]
                    },
                    {
                      "CatName": "Socks",
                      "CategoryValue": "socks",
                      "tagCodes": [
                        "kids_baby_boy_clothing_socks",
                        "kids_baby_boy_clothing_socks"
                      ]
                    },
                    {
                      "CatName": "Swimwear",
                      "CategoryValue": "swimwear",
                      "tagCodes": [
                        "kids_baby_boy_clothing_swimwear",
                        "kids_baby_boy_clothing_swimwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_baby_boy_clothing",
                    "kids_baby_boy_clothing"
                  ]
                },
                {
                  "CatName": "Outerwear",
                  "CategoryValue": "outerwear",
                  "CategoriesArray": [
                    {
                      "CatName": "Jackets & Coats",
                      "CategoryValue": "jackets-coats",
                      "tagCodes": [
                        "kids_baby_boy_outerwear_jacketscoats",
                        "kids_baby_boy_outerwear_jacketscoats"
                      ]
                    },
                    {
                      "CatName": "Snowsuits",
                      "CategoryValue": "snowsuits",
                      "tagCodes": [
                        "kids_baby_boy_outerwear_snowsuits",
                        "kids_baby_boy_outerwear_snowsuits"
                      ]
                    },
                    {
                      "CatName": "Trousers",
                      "CategoryValue": "trousers",
                      "tagCodes": [
                        "kids_baby_boy_outerwear_trousers",
                        "kids_baby_boy_outerwear_trousers"
                      ]
                    },
                    {
                      "CatName": "Rainwear",
                      "CategoryValue": "rainwear",
                      "tagCodes": [
                        "kids_baby_boy_outerwear_rainwear",
                        "kids_baby_boy_outerwear_rainwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_baby_boy_outerwear",
                    "kids_baby_boy_outerwear"
                  ]
                },
                {
                  "CatName": "Accessories",
                  "CategoryValue": "accessories",
                  "CategoriesArray": [
                    {
                      "CatName": "Hats",
                      "CategoryValue": "hats",
                      "tagCodes": [
                        "kids_baby_boy_accessories_hats",
                        "kids_baby_boy_accessories_hats"
                      ]
                    },
                    {
                      "CatName": "Scarves & Gloves",
                      "CategoryValue": "scarves-gloves",
                      "tagCodes": [
                        "kids_baby_boy_accessories_scarvesgloves",
                        "kids_baby_boy_accessories_scarvesgloves"
                      ]
                    },
                    {
                      "CatName": "Bibs",
                      "CategoryValue": "bibs",
                      "tagCodes": [
                        "kids_baby_boy_accessories_bibs",
                        "kids_baby_boy_accessories_bibs"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_baby_boy_accessories",
                    "kids_baby_boy_accessories"
                  ]
                },
                {
                  "CatName": "Shoes",
                  "CategoryValue": "shoes",
                  "CategoriesArray": [
                    {
                      "CatName": "Trainers",
                      "CategoryValue": "trainers",
                      "tagCodes": [
                        "kids_baby_boy_shoes_trainers",
                        "kids_baby_boy_shoes_trainers"
                      ]
                    },
                    {
                      "CatName": "Boots",
                      "CategoryValue": "boots",
                      "tagCodes": [
                        "kids_baby_boy_shoes_boots",
                        "kids_baby_boy_shoes_boots"
                      ]
                    },
                    {
                      "CatName": "Sandals & Flip-Flops",
                      "CategoryValue": "sandals-flip-flops",
                      "tagCodes": [
                        "kids_baby_boy_shoes_sandalsflipflops",
                        "kids_baby_boy_shoes_sandalsflipflops"
                      ]
                    },
                    {
                      "CatName": "Slippers",
                      "CategoryValue": "slippers",
                      "tagCodes": [
                        "kids_baby_boy_shoes_slippers",
                        "kids_baby_boy_shoes_slippers"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_baby_boy_shoes",
                    "kids_baby_boy_shoes"
                  ]
                },
                {
                  "CatName": "Fancy Dress Costumes",
                  "CategoryValue": "fancy-dress-costumes",
                  "tagCodes": [
                    "kids_baby_boy_costumesfancydresses",
                    "kids_baby_boy_costumesfancydresses"
                  ]
                }
              ],
              "tagCodes": [
                "kids_baby_boy_viewall",
                "kids_baby_boy_viewall"
              ]
            },
            {
              "CatName": "Shop by Product",
              "CategoryValue": "shop-by-product",
              "CategoriesArray": [
                {
                  "CatName": "View all",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "kids_newbornbaby_viewall",
                    "kids_newbornbaby_viewall"
                  ]
                },
                {
                  "CatName": "New Arrivals",
                  "CategoryValue": "new-arrivals",
                  "tagCodes": [
                    "kids_newbornbaby_newarrivals",
                    "kids_newbornbaby_newarrivals"
                  ]
                },
                {
                  "CatName": "Clothing",
                  "CategoryValue": "clothing",
                  "CategoriesArray": [
                    {
                      "CatName": "Sets & Outfits",
                      "CategoryValue": "sets-outfits",
                      "tagCodes": [
                        "kids_newbornbaby_setsoutfits",
                        "kids_newbornbaby_setsoutfits"
                      ]
                    },
                    {
                      "CatName": "Dresses",
                      "CategoryValue": "dresses",
                      "tagCodes": [
                        "kids_newbornbaby_clothing_dresses",
                        "kids_newbornbaby_clothing_dresses"
                      ]
                    },
                    {
                      "CatName": "Tops & T-Shirts",
                      "CategoryValue": "tops-t-shirts",
                      "tagCodes": [
                        "kids_newbornbaby_clothing_topstshirts",
                        "kids_newbornbaby_clothing_topstshirts"
                      ]
                    },
                    {
                      "CatName": "Jumpers & Cardigans",
                      "CategoryValue": "jumpers-cardigans",
                      "tagCodes": [
                        "kids_newbornbaby_clothing_jumperssweatshirts",
                        "kids_newbornbaby_clothing_jumperssweatshirts"
                      ]
                    },
                    {
                      "CatName": "Trousers & Jeans",
                      "CategoryValue": "trousers-jeans",
                      "tagCodes": [
                        "kids_newbornbaby_clothing_trousersjeans",
                        "kids_newbornbaby_clothing_trousersjeans"
                      ]
                    },
                    {
                      "CatName": "Bodysuits",
                      "CategoryValue": "bodysuits",
                      "tagCodes": [
                        "kids_newbornbaby_clothing_bodysuits",
                        "kids_newbornbaby_clothing_bodysuits"
                      ]
                    },
                    {
                      "CatName": "Rompers",
                      "CategoryValue": "rompers",
                      "tagCodes": [
                        "kids_newbornbaby_clothing_jumpsuitsplaysuits",
                        "kids_newbornbaby_clothing_jumpsuitsplaysuits"
                      ]
                    },
                    {
                      "CatName": "Shorts",
                      "CategoryValue": "shorts",
                      "tagCodes": [
                        "kids_newbornbaby_clothing_shorts",
                        "kids_newbornbaby_clothing_shorts"
                      ]
                    },
                    {
                      "CatName": "Nightwear",
                      "CategoryValue": "nightwear",
                      "tagCodes": [
                        "kids_newbornbaby_clothing_nightwear",
                        "kids_newbornbaby_clothing_nightwear"
                      ]
                    },
                    {
                      "CatName": "Socks & Tights",
                      "CategoryValue": "socks-tights",
                      "tagCodes": [
                        "kids_newbornbaby_clothing_sockstights",
                        "kids_newbornbaby_clothing_sockstights"
                      ]
                    },
                    {
                      "CatName": "Swimwear",
                      "CategoryValue": "swimwear",
                      "tagCodes": [
                        "kids_newbornbaby_clothing_swimwear",
                        "kids_newbornbaby_clothing_swimwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_newbornbaby_clothing",
                    "kids_newbornbaby_clothing"
                  ]
                },
                {
                  "CatName": "Outerwear",
                  "CategoryValue": "outerwear",
                  "tagCodes": [
                    "kids_newbornbaby_outerwear",
                    "kids_newbornbaby_outerwear"
                  ]
                },
                {
                  "CatName": "Accessories",
                  "CategoryValue": "accessories",
                  "tagCodes": [
                    "kids_newbornbaby_accessories",
                    "kids_newbornbaby_accessories"
                  ]
                },
                {
                  "CatName": "Shoes",
                  "CategoryValue": "shoes",
                  "tagCodes": [
                    "kids_newbornbaby_shoes",
                    "kids_newbornbaby_shoes"
                  ]
                },
                {
                  "CatName": "Fancy Dress Costumes",
                  "CategoryValue": "fancy-dress-costumes",
                  "tagCodes": [
                    "kids_newbornbaby_costumesfancydresses",
                    "kids_newbornbaby_costumesfancydresses"
                  ]
                }
              ],
              "tagCodes": [
                "kids_newbornbaby_viewall"
              ]
            },
            {
              "CatName": "Trending Now",
              "CategoryValue": "seasonal-trending",
              "CategoriesArray": [
                {
                  "CatName": "Sustainable Denim - Spring ",
                  "CategoryValue": "sustainable-denim-spring",
                  "tagCodes": [
                    "4025E_Kids"
                  ]
                },
                {
                  "CatName": "Multipacks",
                  "CategoryValue": "multipacks",
                  "tagCodes": [
                    "kids_newbornbaby_multipacks",
                    "kids_newbornbaby_multipacks"
                  ]
                },
                {
                  "CatName": "The Character Shop",
                  "CategoryValue": "character",
                  "tagCodes": [
                    "kids_newbornbaby_character",
                    "kids_newbornbaby_character"
                  ]
                },
                {
                  "CatName": "Baby Exclusive",
                  "CategoryValue": "baby-exclusive",
                  "tagCodes": [
                    "kids_baby_exclusive",
                    "kids_babyexlcusive"
                  ]
                },
                {
                  "CatName": "Basics",
                  "CategoryValue": "basics",
                  "tagCodes": [
                    "kids_newbornbaby_basics",
                    "kids_newbornbaby_basics"
                  ]
                }
              ],
              "tagCodes": []
            }
          ],
          "tagCodes": [
            "kids_newbornbaby_viewall"
          ]
        },
        {
          "CatName": "Kids",
          "CategoryValue": "kids",
          "CategoriesArray": [
            {
              "CatName": "Girls 2-8Y",
              "CategoryValue": "girls",
              "CategoriesArray": [
                {
                  "CatName": "View all",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "kids_girls_viewall",
                    "kids_girls_viewall"
                  ]
                },
                {
                  "CatName": "New Arrivals",
                  "CategoryValue": "new-arrivals",
                  "tagCodes": [
                    "kids_girls_newarrivals",
                    "kids_girls_newarrivals"
                  ]
                },
                {
                  "CatName": "Clothing",
                  "CategoryValue": "clothing",
                  "CategoriesArray": [
                    {
                      "CatName": "Dresses",
                      "CategoryValue": "dresses",
                      "tagCodes": [
                        "kids_girls_clothing_dresses",
                        "kids_girls_clothing_dresses"
                      ]
                    },
                    {
                      "CatName": "Tops & T-Shirts",
                      "CategoryValue": "tops-t-shirts",
                      "CategoriesArray": [
                        {
                          "CatName": "T-Shirts",
                          "CategoryValue": "t-shirts",
                          "tagCodes": [
                            "kids_girls_clothing_topstshirts_tshirts",
                            "kids_girls_clothing_topstshirts_tshirts"
                          ]
                        },
                        {
                          "CatName": "Shirts & Blouses",
                          "CategoryValue": "shirts-blouses",
                          "tagCodes": [
                            "kids_girls_clothing_topstshirts_shirtsblouses",
                            "kids_girls_clothing_topstshirts_shirtsblouses"
                          ]
                        },
                        {
                          "CatName": "Tank Tops",
                          "CategoryValue": "tank-tops",
                          "tagCodes": [
                            "kids_girls_clothing_topstshirts_tanktops",
                            "kids_girls_clothing_topstshirts_tanktops"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_girls_clothing_topstshirts",
                        "kids_girls_clothing_topstshirts"
                      ]
                    },
                    {
                      "CatName": "Jumpers & Sweatshirts",
                      "CategoryValue": "jumpers-sweatshirts",
                      "CategoriesArray": [
                        {
                          "CatName": "Hoodies",
                          "CategoryValue": "hoodies",
                          "tagCodes": [
                            "kids_girls_clothing_jumperssweatshirts_hoodies",
                            "kids_girls_clothing_jumperssweatshirts_hoodies"
                          ]
                        },
                        {
                          "CatName": "Sweatshirts",
                          "CategoryValue": "sweatshirts",
                          "tagCodes": [
                            "kids_girls_clothing_jumperssweatshirts_sweatshirts",
                            "kids_girls_clothing_jumperssweatshirts_sweatshirts"
                          ]
                        },
                        {
                          "CatName": "Jumpers",
                          "CategoryValue": "jumpers",
                          "tagCodes": [
                            "kids_girls_clothing_jumperssweatshirts_jumpers",
                            "kids_girls_clothing_jumperssweatshirts_jumpers"
                          ]
                        },
                        {
                          "CatName": "Cardigans",
                          "CategoryValue": "cardigans",
                          "tagCodes": [
                            "kids_girls_clothing_jumperssweatshirts_cardigans",
                            "kids_girls_clothing_jumperssweatshirts_cardigans"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_girls_clothing_jumperssweatshirts",
                        "kids_girls_clothing_jumperssweatshirts"
                      ]
                    },
                    {
                      "CatName": "Trousers & Jeans",
                      "CategoryValue": "trousers-jeans",
                      "CategoriesArray": [
                        {
                          "CatName": "Joggers & Sweatpants",
                          "CategoryValue": "joggers-sweatpants",
                          "tagCodes": [
                            "kids_girls_clothing_trousersjeans_joggerssweatpants",
                            "kids_girls_clothing_trousersjeans_joggerssweatpants"
                          ]
                        },
                        {
                          "CatName": "Trousers",
                          "CategoryValue": "trousers",
                          "tagCodes": [
                            "kids_girls_clothing_trousersjeans_trousers",
                            "kids_girls_clothing_trousersjeans_trousers"
                          ]
                        },
                        {
                          "CatName": "Leggings",
                          "CategoryValue": "leggings",
                          "tagCodes": [
                            "kids_girls_clothing_trousersjeans_leggingstreggings",
                            "kids_girls_clothing_trousersjeans_leggingstreggings"
                          ]
                        },
                        {
                          "CatName": "Jeans",
                          "CategoryValue": "jeans",
                          "CategoriesArray": [
                            {
                              "CatName": "Skinny",
                              "CategoryValue": "skinny",
                              "tagCodes": [
                                "kids_girls_clothing_trousersjeans_jeans_skinny",
                                "kids_girls_clothing_trousersjeans_jeans_skinny"
                              ]
                            },
                            {
                              "CatName": "Relaxed",
                              "CategoryValue": "relaxed",
                              "tagCodes": [
                                "kids_girls_clothing_trousersjeans_jeans_relaxed",
                                "kids_girls_clothing_trousersjeans_jeans_relaxed"
                              ]
                            },
                            {
                              "CatName": "Joggers",
                              "CategoryValue": "joggers",
                              "tagCodes": [
                                "kids_girls_clothing_trousersjeans_jeans_joggers",
                                "kids_girls_clothing_trousersjeans_jeans_joggers"
                              ]
                            },
                            {
                              "CatName": "Wide",
                              "CategoryValue": "wide",
                              "tagCodes": [
                                "kids_girls_clothing_trousersjeans_jeans_wide",
                                "kids_girls_clothing_trousersjeans_jeans_wide"
                              ]
                            },
                            {
                              "CatName": "Leggings",
                              "CategoryValue": "leggings",
                              "tagCodes": [
                                "kids_girls_clothing_trousersjeans_jeans_leggings",
                                "kids_girls_clothing_trousersjeans_jeans_leggings"
                              ]
                            }
                          ],
                          "tagCodes": [
                            "kids_girls_clothing_trousersjeans_jeans",
                            "kids_girls_clothing_trousersjeans_jeans"
                          ]
                        },
                        {
                          "CatName": "Dungarees",
                          "CategoryValue": "dungarees",
                          "tagCodes": [
                            "kids_girls_clothing_trousersjeans_dungarees",
                            "kids_girls_clothing_trousersjeans_dungarees"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_girls_clothing_trousersjeans",
                        "kids_girls_clothing_trousersjeans"
                      ]
                    },
                    {
                      "CatName": "Skirts",
                      "CategoryValue": "skirts",
                      "tagCodes": [
                        "kids_girls_clothing_skirts",
                        "kids_girls_clothing_skirts"
                      ]
                    },
                    {
                      "CatName": "Shorts",
                      "CategoryValue": "shorts",
                      "tagCodes": [
                        "kids_girls_clothing_shorts",
                        "kids_girls_clothing_shorts"
                      ]
                    },
                    {
                      "CatName": "Jumpsuits & Playsuits",
                      "CategoryValue": "jumpsuits-playsuits",
                      "CategoriesArray": [
                        {
                          "CatName": "Jumpsuits",
                          "CategoryValue": "jumpsuits",
                          "tagCodes": [
                            "kids_girls_clothing_jumpsuitsplaysuits_jumpsuits",
                            "kids_girls_clothing_jumpsuitsplaysuits_jumpsuits"
                          ]
                        },
                        {
                          "CatName": "Playsuits",
                          "CategoryValue": "playsuits",
                          "tagCodes": [
                            "kids_girls_clothing_jumpsuitsplaysuits_playsuits",
                            "kids_girls_clothing_jumpsuitsplaysuits_playsuits"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_girls_clothing_jumpsuitsplaysuits",
                        "kids_girls_clothing_jumpsuitsplaysuits"
                      ]
                    },
                    {
                      "CatName": "Sets & Outfits",
                      "CategoryValue": "sets-outfits",
                      "tagCodes": [
                        "kids_girls_setsoutfits",
                        "kids_girls_setsoutfits"
                      ]
                    },
                    {
                      "CatName": "Nightwear",
                      "CategoryValue": "nightwear",
                      "CategoriesArray": [
                        {
                          "CatName": "Dressing Gowns",
                          "CategoryValue": "dressing-gowns",
                          "tagCodes": [
                            "kids_girls_clothing_nightwear_dressinggowns",
                            "kids_girls_clothing_nightwear_dressinggowns"
                          ]
                        },
                        {
                          "CatName": "Nighties",
                          "CategoryValue": "nighties",
                          "tagCodes": [
                            "kids_girls_clothing_nightwear_nighties",
                            "kids_girls_clothing_nightwear_nighties"
                          ]
                        },
                        {
                          "CatName": "Pyjamas",
                          "CategoryValue": "pyjamas",
                          "tagCodes": [
                            "kids_girls_clothing_nightwear_pyjamas",
                            "kids_girls_clothing_nightwear_pyjamas"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_girls_clothing_nightwear",
                        "kids_girls_clothing_nightwear"
                      ]
                    },
                    {
                      "CatName": "Underwear",
                      "CategoryValue": "underwear",
                      "tagCodes": [
                        "kids_girls_clothing_underwear",
                        "kids_girls_clothing_underwear"
                      ]
                    },
                    {
                      "CatName": "Socks & Tights",
                      "CategoryValue": "socks-tights",
                      "CategoriesArray": [
                        {
                          "CatName": "Socks",
                          "CategoryValue": "socks",
                          "tagCodes": [
                            "kids_girls_clothing_sockstights_socks",
                            "kids_girls_clothing_sockstights_socks"
                          ]
                        },
                        {
                          "CatName": "Tights",
                          "CategoryValue": "tights",
                          "tagCodes": [
                            "kids_girls_clothing_sockstights_tights",
                            "kids_girls_clothing_sockstights_tights"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_girls_clothing_sockstights",
                        "kids_girls_clothing_sockstights"
                      ]
                    },
                    {
                      "CatName": "Swimwear",
                      "CategoryValue": "swimwear",
                      "CategoriesArray": [
                        {
                          "CatName": "Swimsuits",
                          "CategoryValue": "swimsuits",
                          "tagCodes": [
                            "kids_girls_clothing_swimwear_swimsuits",
                            "kids_girls_clothing_swimwear_swimsuits"
                          ]
                        },
                        {
                          "CatName": "Bikinis",
                          "CategoryValue": "bikinis",
                          "tagCodes": [
                            "kids_girls_clothing_swimwear_bikinis",
                            "kids_girls_clothing_swimwear_bikinis"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_girls_clothing_swimwear",
                        "kids_girls_clothing_swimwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_girls_clothing",
                    "kids_girls_clothing"
                  ]
                },
                {
                  "CatName": "Outerwear",
                  "CategoryValue": "outerwear",
                  "CategoriesArray": [
                    {
                      "CatName": "Jackets",
                      "CategoryValue": "jackets",
                      "tagCodes": [
                        "kids_girls_outerwear_jackets",
                        "kids_girls_outerwear_jackets"
                      ]
                    },
                    {
                      "CatName": "Gilets",
                      "CategoryValue": "gilets",
                      "tagCodes": [
                        "kids_girls_outerwear_gilets",
                        "kids_girls_outerwear_gilets"
                      ]
                    },
                    {
                      "CatName": "Trousers",
                      "CategoryValue": "trousers",
                      "tagCodes": [
                        "kids_girls_outerwear_trousers",
                        "kids_girls_outerwear_trousers"
                      ]
                    },
                    {
                      "CatName": "Rainwear",
                      "CategoryValue": "rainwear",
                      "tagCodes": [
                        "kids_girls_outerwear_rainwear",
                        "kids_girls_outerwear_rainwear"
                      ]
                    },
                    {
                      "CatName": "Skiwear",
                      "CategoryValue": "skiwear",
                      "tagCodes": [
                        "kids_girls_outerwear_skiwear",
                        "kids_girls_outerwear_skiwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_girls_outerwear",
                    "kids_girls_outerwear"
                  ]
                },
                {
                  "CatName": "Accessories",
                  "CategoryValue": "accessories",
                  "CategoriesArray": [
                    {
                      "CatName": "Hats",
                      "CategoryValue": "hats",
                      "tagCodes": [
                        "kids_girls_accessories_hats",
                        "kids_girls_accessories_hats"
                      ]
                    },
                    {
                      "CatName": "Scarves & Gloves",
                      "CategoryValue": "scarves-gloves",
                      "tagCodes": [
                        "kids_girls_accessories_scarvesgloves",
                        "kids_girls_accessories_scarvesgloves"
                      ]
                    },
                    {
                      "CatName": "Bags",
                      "CategoryValue": "bags",
                      "tagCodes": [
                        "kids_girls_accessories_bags",
                        "kids_girls_accessories_bags"
                      ]
                    },
                    {
                      "CatName": "Hair Accessories",
                      "CategoryValue": "hair-accessories",
                      "tagCodes": [
                        "kids_girls_accessories_hairaccessories",
                        "kids_girls_accessories_hairaccessories"
                      ]
                    },
                    {
                      "CatName": "Jewellery",
                      "CategoryValue": "jewellery",
                      "tagCodes": [
                        "kids_girls_accessories_jewellery",
                        "kids_girls_accessories_jewellery"
                      ]
                    },
                    {
                      "CatName": "Sunglasses",
                      "CategoryValue": "sunglasses",
                      "tagCodes": [
                        "kids_girls_accessories_sunglasses",
                        "kids_girls_accessories_sunglasses"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_girls_accessories",
                    "kids_girls_accessories"
                  ]
                },
                {
                  "CatName": "Shoes",
                  "CategoryValue": "shoes",
                  "CategoriesArray": [
                    {
                      "CatName": "Trainers",
                      "CategoryValue": "trainers",
                      "tagCodes": [
                        "kids_girls_shoes_trainers",
                        "kids_girls_shoes_trainers"
                      ]
                    },
                    {
                      "CatName": "Ballerinas & Flats",
                      "CategoryValue": "ballerinas-flats",
                      "tagCodes": [
                        "kids_girls_shoes_ballerinasflats",
                        "kids_girls_shoes_ballerinasflats"
                      ]
                    },
                    {
                      "CatName": "Boots",
                      "CategoryValue": "boots",
                      "tagCodes": [
                        "kids_girls_shoes_boots",
                        "kids_girls_shoes_boots"
                      ]
                    },
                    {
                      "CatName": "Rainboots",
                      "CategoryValue": "rainboots",
                      "tagCodes": [
                        "kids_girls_shoes_rainboots",
                        "kids_girls_shoes_rainboots"
                      ]
                    },
                    {
                      "CatName": "Sandals & Flip-Flops",
                      "CategoryValue": "sandals-flip-flops",
                      "tagCodes": [
                        "kids_girls_shoes_sandalsflipflops",
                        "kids_girls_shoes_sandalsflipflops"
                      ]
                    },
                    {
                      "CatName": "Slippers",
                      "CategoryValue": "slippers",
                      "tagCodes": [
                        "kids_girls_shoes_slippers",
                        "kids_girls_shoes_slippers"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_girls_shoes",
                    "kids_girls_shoes"
                  ]
                },
                {
                  "CatName": "Fancy Dress Costumes",
                  "CategoryValue": "fancy-dress-costumes",
                  "tagCodes": [
                    "kids_girls_costumesfancydresses",
                    "kids_girls_costumesfancydresses"
                  ]
                },
                {
                  "CatName": "Sportswear",
                  "CategoryValue": "sportswear",
                  "tagCodes": [
                    "kids_girls_sportswear",
                    "kids_girls_sportswear"
                  ]
                }
              ],
              "tagCodes": [
                "kids_girls_viewall",
                "kids_girls_viewall"
              ]
            },
            {
              "CatName": "Boys 2-8Y",
              "CategoryValue": "boys",
              "CategoriesArray": [
                {
                  "CatName": "View all",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "kids_boys_viewall",
                    "kids_boys_viewall"
                  ]
                },
                {
                  "CatName": "New Arrivals",
                  "CategoryValue": "new-arrivals",
                  "tagCodes": [
                    "kids_boys_newarrivals",
                    "kids_boys_newarrivals"
                  ]
                },
                {
                  "CatName": "Clothing",
                  "CategoryValue": "clothing",
                  "CategoriesArray": [
                    {
                      "CatName": "T-shirts & Shirts",
                      "CategoryValue": "t-shirts-shirts",
                      "CategoriesArray": [
                        {
                          "CatName": "T-Shirts",
                          "CategoryValue": "t-shirts",
                          "tagCodes": [
                            "kids_boys_clothing_tshirtsshirts_tshirts",
                            "kids_boys_clothing_tshirtsshirts_tshirts"
                          ]
                        },
                        {
                          "CatName": "Shirts",
                          "CategoryValue": "shirts",
                          "tagCodes": [
                            "kids_boys_clothing_tshirtsshirts_shirts",
                            "kids_boys_clothing_tshirtsshirts_shirts"
                          ]
                        },
                        {
                          "CatName": "Tank Tops",
                          "CategoryValue": "tank-tops",
                          "tagCodes": [
                            "kids_boys_clothing_tshirtsshirts_tanktops",
                            "kids_boys_clothing_tshirtsshirts_tanktops"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_boys_clothing_tshirtsshirts",
                        "kids_boys_clothing_tshirtsshirts"
                      ]
                    },
                    {
                      "CatName": "Jumpers & Sweatshirts",
                      "CategoryValue": "jumpers-sweatshirts",
                      "CategoriesArray": [
                        {
                          "CatName": "Hoodies",
                          "CategoryValue": "hoodies",
                          "tagCodes": [
                            "kids_boys_clothing_jumperssweatshirts_hoodies",
                            "kids_boys_clothing_jumperssweatshirts_hoodies"
                          ]
                        },
                        {
                          "CatName": "Sweatshirts",
                          "CategoryValue": "sweatshirts",
                          "tagCodes": [
                            "kids_boys_clothing_jumperssweatshirts_sweatshirts",
                            "kids_boys_clothing_jumperssweatshirts_sweatshirts"
                          ]
                        },
                        {
                          "CatName": "Jumpers",
                          "CategoryValue": "jumpers",
                          "tagCodes": [
                            "kids_boys_clothing_jumperssweatshirts_jumpers",
                            "kids_boys_clothing_jumperssweatshirts_jumpers"
                          ]
                        },
                        {
                          "CatName": "Cardigans",
                          "CategoryValue": "cardigans",
                          "tagCodes": [
                            "kids_boys_clothing_jumperssweatshirts_cardigans",
                            "kids_boys_clothing_jumperssweatshirts_cardigans"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_boys_clothing_jumperssweatshirts",
                        "kids_boys_clothing_jumperssweatshirts"
                      ]
                    },
                    {
                      "CatName": "Trousers & Jeans",
                      "CategoryValue": "trousers-jeans",
                      "CategoriesArray": [
                        {
                          "CatName": "Joggers & Sweatpants",
                          "CategoryValue": "joggers-sweatpants",
                          "tagCodes": [
                            "kids_boys_clothing_trousersjeans_joggerssweatpants",
                            "kids_boys_clothing_trousersjeans_joggerssweatpants"
                          ]
                        },
                        {
                          "CatName": "Trousers",
                          "CategoryValue": "trousers",
                          "tagCodes": [
                            "kids_boys_clothing_trousersjeans_trousers",
                            "kids_boys_clothing_trousersjeans_trousers"
                          ]
                        },
                        {
                          "CatName": "Jeans",
                          "CategoryValue": "jeans",
                          "CategoriesArray": [
                            {
                              "CatName": "Skinny",
                              "CategoryValue": "skinny",
                              "tagCodes": [
                                "kids_boys_clothing_trousersjeans_jeans_skinny",
                                "kids_boys_clothing_trousersjeans_jeans_skinny"
                              ]
                            },
                            {
                              "CatName": "Slim",
                              "CategoryValue": "slim",
                              "tagCodes": [
                                "kids_boys_clothing_trousersjeans_jeans_slim",
                                "kids_boys_clothing_trousersjeans_jeans_slim"
                              ]
                            },
                            {
                              "CatName": "Relaxed",
                              "CategoryValue": "relaxed",
                              "tagCodes": [
                                "kids_boys_clothing_trousersjeans_jeans_relaxed",
                                "kids_boys_clothing_trousersjeans_jeans_relaxed"
                              ]
                            },
                            {
                              "CatName": "Joggers",
                              "CategoryValue": "joggers",
                              "tagCodes": [
                                "kids_boys_clothing_trousersjeans_jeans_joggers",
                                "kids_boys_clothing_trousersjeans_jeans_joggers"
                              ]
                            }
                          ],
                          "tagCodes": [
                            "kids_boys_clothing_trousersjeans_jeans",
                            "kids_boys_clothing_trousersjeans_jeans"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_boys_clothing_trousersjeans",
                        "kids_boys_clothing_trousersjeans"
                      ]
                    },
                    {
                      "CatName": "Shorts",
                      "CategoryValue": "shorts",
                      "tagCodes": [
                        "kids_boys_clothing_shorts",
                        "kids_boys_clothing_shorts"
                      ]
                    },
                    {
                      "CatName": "Blazers & Suits",
                      "CategoryValue": "blazers-suits",
                      "tagCodes": [
                        "kids_boys_clothing_blazerssuits",
                        "kids_boys_clothing_blazerssuits"
                      ]
                    },
                    {
                      "CatName": "Sets & Outfits",
                      "CategoryValue": "sets-outfits",
                      "tagCodes": [
                        "kids_boys_setsoutfits",
                        "kids_boys_setsoutfits"
                      ]
                    },
                    {
                      "CatName": "Nightwear",
                      "CategoryValue": "nightwear",
                      "CategoriesArray": [
                        {
                          "CatName": "Dressing Gowns",
                          "CategoryValue": "dressing-gowns",
                          "tagCodes": [
                            "kids_boys_clothing_nightwear_dressinggowns",
                            "kids_boys_clothing_nightwear_dressinggowns"
                          ]
                        },
                        {
                          "CatName": "Pyjamas",
                          "CategoryValue": "pyjamas",
                          "tagCodes": [
                            "kids_boys_clothing_nightwear_pyjamas",
                            "kids_boys_clothing_nightwear_pyjamas"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_boys_clothing_nightwear",
                        "kids_boys_clothing_nightwear"
                      ]
                    },
                    {
                      "CatName": "Underwear",
                      "CategoryValue": "underwear",
                      "tagCodes": [
                        "kids_boys_clothing_underwear",
                        "kids_boys_clothing_underwear"
                      ]
                    },
                    {
                      "CatName": "Socks",
                      "CategoryValue": "socks",
                      "tagCodes": [
                        "kids_boys_clothing_socks",
                        "kids_boys_clothing_socks"
                      ]
                    },
                    {
                      "CatName": "Swimwear",
                      "CategoryValue": "swimwear",
                      "tagCodes": [
                        "kids_boys_clothing_swimwear",
                        "kids_boys_clothing_swimwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_boys_clothing",
                    "kids_boys_clothing"
                  ]
                },
                {
                  "CatName": "Outerwear",
                  "CategoryValue": "outerwear",
                  "CategoriesArray": [
                    {
                      "CatName": "Jackets",
                      "CategoryValue": "jackets",
                      "tagCodes": [
                        "kids_boys_outerwear_jackets",
                        "kids_boys_outerwear_jackets"
                      ]
                    },
                    {
                      "CatName": "Gilets",
                      "CategoryValue": "gilets",
                      "tagCodes": [
                        "kids_boys_outerwear_gilets",
                        "kids_boys_outerwear_gilets"
                      ]
                    },
                    {
                      "CatName": "Trousers",
                      "CategoryValue": "trousers",
                      "tagCodes": [
                        "kids_boys_outerwear_trousers",
                        "kids_boys_outerwear_trousers"
                      ]
                    },
                    {
                      "CatName": "Rainwear",
                      "CategoryValue": "rainwear",
                      "tagCodes": [
                        "kids_boys_outerwear_rainwear",
                        "kids_boys_outerwear_rainwear"
                      ]
                    },
                    {
                      "CatName": "Skiwear",
                      "CategoryValue": "skiwear",
                      "tagCodes": [
                        "kids_boys_outerwear_skiiwear",
                        "kids_boys_outerwear_skiiwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_boys_outerwear",
                    "kids_boys_outerwear"
                  ]
                },
                {
                  "CatName": "Accessories",
                  "CategoryValue": "accessories",
                  "CategoriesArray": [
                    {
                      "CatName": "Hats",
                      "CategoryValue": "hats",
                      "tagCodes": [
                        "kids_boys_accessories_hats",
                        "kids_boys_accessories_hats"
                      ]
                    },
                    {
                      "CatName": "Scarves & Gloves",
                      "CategoryValue": "scarves-gloves",
                      "tagCodes": [
                        "kids_boys_accessories_scarvesgloves",
                        "kids_boys_accessories_scarvesgloves"
                      ]
                    },
                    {
                      "CatName": "Bags",
                      "CategoryValue": "bags",
                      "tagCodes": [
                        "kids_boys_accessories_bags",
                        "kids_boys_accessories_bags"
                      ]
                    },
                    {
                      "CatName": "Belts & Suspenders",
                      "CategoryValue": "belts-suspenders",
                      "tagCodes": [
                        "kids_boys_accessories_beltssuspenders",
                        "kids_boys_accessories_beltssuspenders"
                      ]
                    },
                    {
                      "CatName": "Ties & Bow Ties",
                      "CategoryValue": "ties-bow-ties",
                      "tagCodes": [
                        "kids_boys_accessories_tiesbowties",
                        "kids_boys_accessories_tiesbowties"
                      ]
                    },
                    {
                      "CatName": "Sunglasses",
                      "CategoryValue": "sunglasses",
                      "tagCodes": [
                        "kids_boys_accessories_sunglasses",
                        "kids_boys_accessories_sunglasses"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_boys_accessories",
                    "kids_boys_accessories"
                  ]
                },
                {
                  "CatName": "Shoes",
                  "CategoryValue": "shoes",
                  "CategoriesArray": [
                    {
                      "CatName": "Trainers",
                      "CategoryValue": "trainers",
                      "tagCodes": [
                        "kids_boys_shoes_trainers",
                        "kids_boys_shoes_trainers"
                      ]
                    },
                    {
                      "CatName": "Boots",
                      "CategoryValue": "boots",
                      "tagCodes": [
                        "kids_boys_shoes_boots",
                        "kids_boys_shoes_boots"
                      ]
                    },
                    {
                      "CatName": "Rainboots",
                      "CategoryValue": "rainboots",
                      "tagCodes": [
                        "kids_boys_shoes_rainboots",
                        "kids_boys_shoes_rainboots"
                      ]
                    },
                    {
                      "CatName": "Sandals & Flip-Flops",
                      "CategoryValue": "sandals-flip-flops",
                      "tagCodes": [
                        "kids_boys_shoes_sandalsflipflops",
                        "kids_boys_shoes_sandalsflipflops"
                      ]
                    },
                    {
                      "CatName": "Slippers",
                      "CategoryValue": "slippers",
                      "tagCodes": [
                        "kids_boys_shoes_slippers",
                        "kids_boys_shoes_slippers"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_boys_shoes",
                    "kids_boys_shoes"
                  ]
                },
                {
                  "CatName": "Fancy Dress Costumes",
                  "CategoryValue": "fancy-dress-costumes",
                  "tagCodes": [
                    "kids_boys_costumesfancydresses",
                    "kids_boys_costumesfancydresses"
                  ]
                },
                {
                  "CatName": "Sportswear",
                  "CategoryValue": "sportswear",
                  "tagCodes": [
                    "kids_boys_sportswear",
                    "kids_boys_sportswear"
                  ]
                }
              ],
              "tagCodes": [
                "kids_boys_viewall",
                "kids_boys_viewall"
              ]
            },
            {
              "CatName": "Girls 9-14Y",
              "CategoryValue": "girls-9-14y",
              "CategoriesArray": [
                {
                  "CatName": "View all",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "kids_oldergirls_viewall",
                    "kids_oldergirls_viewall"
                  ]
                },
                {
                  "CatName": "New Arrivals",
                  "CategoryValue": "new-arrivals",
                  "tagCodes": [
                    "kids_oldergirls_newarrivals",
                    "kids_oldergirls_newarrivals"
                  ]
                },
                {
                  "CatName": "Clothing",
                  "CategoryValue": "clothing",
                  "CategoriesArray": [
                    {
                      "CatName": "Dresses",
                      "CategoryValue": "dresses",
                      "tagCodes": [
                        "kids_oldergirls_clothing_dresses",
                        "kids_oldergirls_clothing_dresses"
                      ]
                    },
                    {
                      "CatName": "Tops & T-Shirts",
                      "CategoryValue": "tops-t-shirts",
                      "tagCodes": [
                        "kids_oldergirls_clothing_topstshirts",
                        "kids_oldergirls_clothing_topstshirts"
                      ]
                    },
                    {
                      "CatName": "Jumpers & Sweatshirts",
                      "CategoryValue": "jumpers-sweatshirts",
                      "tagCodes": [
                        "kids_oldergirls_clothing_jumperssweatshirts",
                        "kids_oldergirls_clothing_jumperssweatshirts"
                      ]
                    },
                    {
                      "CatName": "Trousers & Jeans",
                      "CategoryValue": "trousers-jeans",
                      "tagCodes": [
                        "kids_oldergirls_clothing_trousersjeans",
                        "kids_oldergirls_clothing_trousersjeans"
                      ]
                    },
                    {
                      "CatName": "Skirts",
                      "CategoryValue": "skirts",
                      "tagCodes": [
                        "kids_oldergirls_clothing_skirts",
                        "kids_oldergirls_clothing_skirts"
                      ]
                    },
                    {
                      "CatName": "Shorts",
                      "CategoryValue": "shorts",
                      "tagCodes": [
                        "kids_oldergirls_clothing_shorts",
                        "kids_oldergirls_clothing_shorts"
                      ]
                    },
                    {
                      "CatName": "Jumpsuits & Playsuits",
                      "CategoryValue": "jumpsuits-playsuits",
                      "tagCodes": [
                        "kids_oldergirls_clothing_jumpsuitsplaysuits",
                        "kids_oldergirls_clothing_jumpsuitsplaysuits"
                      ]
                    },
                    {
                      "CatName": "Sets & Outfits",
                      "CategoryValue": "sets-outfits",
                      "tagCodes": [
                        "kids_oldergirls_clothing_setsoutfits",
                        "kids_oldergirls_clothing_setsoutfits"
                      ]
                    },
                    {
                      "CatName": "Nightwear",
                      "CategoryValue": "nightwear",
                      "tagCodes": [
                        "kids_oldergirls_clothing_nightwear",
                        "kids_oldergirls_clothing_nightwear"
                      ]
                    },
                    {
                      "CatName": "Underwear",
                      "CategoryValue": "underwear",
                      "tagCodes": [
                        "kids_oldergirls_clothing_underwear",
                        "kids_oldergirls_clothing_underwear"
                      ]
                    },
                    {
                      "CatName": "Socks & Tights",
                      "CategoryValue": "socks-tights",
                      "tagCodes": [
                        "kids_oldergirls_clothing_sockstights",
                        "kids_oldergirls_clothing_sockstights"
                      ]
                    },
                    {
                      "CatName": "Swimwear",
                      "CategoryValue": "swimwear",
                      "tagCodes": [
                        "kids_oldergirls_clothing_swimwear",
                        "kids_oldergirls_clothing_swimwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_oldergirls_clothing",
                    "kids_oldergirls_clothing"
                  ]
                },
                {
                  "CatName": "Outerwear",
                  "CategoryValue": "outerwear",
                  "tagCodes": [
                    "kids_oldergirls_outerwear",
                    "kids_oldergirls_outerwear"
                  ]
                },
                {
                  "CatName": "Accessories",
                  "CategoryValue": "accessories",
                  "tagCodes": [
                    "kids_oldergirls_accessories",
                    "kids_oldergirls_accessories"
                  ]
                },
                {
                  "CatName": "Shoes",
                  "CategoryValue": "shoes",
                  "tagCodes": [
                    "kids_oldergirls_shoes",
                    "kids_oldergirls_shoes"
                  ]
                },
                {
                  "CatName": "Fancy Dress Costumes",
                  "CategoryValue": "fancy-dress-costumes",
                  "tagCodes": [
                    "kids_oldergirls_costumesfancydresses",
                    "kids_oldergirls_costumesfancydresses"
                  ]
                },
                {
                  "CatName": "Sportswear",
                  "CategoryValue": "sportswear",
                  "tagCodes": [
                    "kids_oldergirls_sportswear",
                    "kids_oldergirls_sportswear"
                  ]
                }
              ],
              "tagCodes": [
                "kids_oldergirls_viewall"
              ]
            },
            {
              "CatName": "Boys 9-14Y",
              "CategoryValue": "boys-9-14y",
              "CategoriesArray": [
                {
                  "CatName": "View all",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "kids_olderboys_viewall",
                    "kids_olderboys_viewall"
                  ]
                },
                {
                  "CatName": "New Arrivals",
                  "CategoryValue": "new-arrivals",
                  "tagCodes": [
                    "kids_olderboys_newarrivals",
                    "kids_olderboys_newarrivals"
                  ]
                },
                {
                  "CatName": "Clothing",
                  "CategoryValue": "clothing",
                  "CategoriesArray": [
                    {
                      "CatName": "T-shirts & Shirts",
                      "CategoryValue": "t-shirts-shirts",
                      "tagCodes": [
                        "kids_olderboys_clothing_tshirtsshirts",
                        "kids_olderboys_clothing_tshirtsshirts"
                      ]
                    },
                    {
                      "CatName": "Jumpers & Sweatshirts",
                      "CategoryValue": "jumpers-sweatshirts",
                      "tagCodes": [
                        "kids_olderboys_clothing_jumperssweatshirts",
                        "kids_olderboys_clothing_jumperssweatshirts"
                      ]
                    },
                    {
                      "CatName": "Trousers & Jeans",
                      "CategoryValue": "trousers-jeans",
                      "tagCodes": [
                        "kids_olderboys_clothing_trousersjeans",
                        "kids_olderboys_clothing_trousersjeans"
                      ]
                    },
                    {
                      "CatName": "Shorts",
                      "CategoryValue": "shorts",
                      "tagCodes": [
                        "kids_olderboys_clothing_shorts",
                        "kids_olderboys_clothing_shorts"
                      ]
                    },
                    {
                      "CatName": "Blazers & Suits",
                      "CategoryValue": "blazers-suits",
                      "tagCodes": [
                        "kids_olderboys_clothing_blazerssuits",
                        "kids_olderboys_clothing_blazerssuits"
                      ]
                    },
                    {
                      "CatName": "Sets & Outfits",
                      "CategoryValue": "sets-outfits",
                      "tagCodes": [
                        "kids_olderboys_clothing_setsoutfit",
                        "kids_olderboys_clothing_setsoutfit"
                      ]
                    },
                    {
                      "CatName": "Nightwear",
                      "CategoryValue": "nightwear",
                      "tagCodes": [
                        "kids_olderboys_clothing_nightwear",
                        "kids_olderboys_clothing_nightwear"
                      ]
                    },
                    {
                      "CatName": "Underwear",
                      "CategoryValue": "underwear",
                      "tagCodes": [
                        "kids_olderboys_clothing_underwear",
                        "kids_olderboys_clothing_underwear"
                      ]
                    },
                    {
                      "CatName": "Socks",
                      "CategoryValue": "socks",
                      "tagCodes": [
                        "kids_olderboys_clothing_socks",
                        "kids_olderboys_clothing_socks"
                      ]
                    },
                    {
                      "CatName": "Swimwear",
                      "CategoryValue": "swimwear",
                      "tagCodes": [
                        "kids_olderboys_clothing_swimwear",
                        "kids_olderboys_clothing_swimwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_olderboys_clothing",
                    "kids_olderboys_clothing"
                  ]
                },
                {
                  "CatName": "Outerwear",
                  "CategoryValue": "outerwear",
                  "tagCodes": [
                    "kids_olderboys_outerwear",
                    "kids_olderboys_outerwear"
                  ]
                },
                {
                  "CatName": "Accessories",
                  "CategoryValue": "accessories",
                  "tagCodes": [
                    "kids_olderboys_accessories",
                    "kids_olderboys_accessories"
                  ]
                },
                {
                  "CatName": "Shoes",
                  "CategoryValue": "shoes",
                  "tagCodes": [
                    "kids_olderboys_shoes",
                    "kids_olderboys_shoes"
                  ]
                },
                {
                  "CatName": "Fancy Dress Costumes",
                  "CategoryValue": "fancy-dress-costumes",
                  "tagCodes": [
                    "kids_olderboys_costumesfancydresses",
                    "kids_olderboys_costumesfancydresses"
                  ]
                },
                {
                  "CatName": "Sportswear",
                  "CategoryValue": "sportswear",
                  "tagCodes": [
                    "kids_olderboys_sportswear",
                    "kids_olderboys_sportswear"
                  ]
                }
              ],
              "tagCodes": [
                "kids_olderboys_viewall"
              ]
            },
            {
              "CatName": "Shop by Product",
              "CategoryValue": "shop-by-product",
              "CategoriesArray": [
                {
                  "CatName": "View all",
                  "CategoryValue": "view-all",
                  "tagCodes": [
                    "kids_viewall",
                    "kids_viewall"
                  ]
                },
                {
                  "CatName": "New Arrivals",
                  "CategoryValue": "new-arrivals",
                  "tagCodes": [
                    "kids_kids_newarrivals",
                    "kids_newarrivals"
                  ]
                },
                {
                  "CatName": "Clothing",
                  "CategoryValue": "clothing",
                  "CategoriesArray": [
                    {
                      "CatName": "Dresses",
                      "CategoryValue": "dresses",
                      "tagCodes": [
                        "kids_clothing_dresses",
                        "kids_clothing_dresses"
                      ]
                    },
                    {
                      "CatName": "Tops & T-shirts",
                      "CategoryValue": "tops-t-shirts",
                      "CategoriesArray": [
                        {
                          "CatName": "T-shirts",
                          "CategoryValue": "t-shirts",
                          "tagCodes": [
                            "kids_clothing_tops_tshirts",
                            "kids_clothing_tops_tshirts"
                          ]
                        },
                        {
                          "CatName": "Shirts",
                          "CategoryValue": "shirts",
                          "tagCodes": [
                            "kids_clothing_tops_shirts",
                            "kids_clothing_tops_shirts"
                          ]
                        },
                        {
                          "CatName": "Blouses",
                          "CategoryValue": "blouses",
                          "tagCodes": [
                            "kids_clothing_tops_tops",
                            "kids_clothing_tops_tops"
                          ]
                        },
                        {
                          "CatName": "Tank Tops",
                          "CategoryValue": "tank-tops",
                          "tagCodes": [
                            "kids_clothing_tops_tanktops",
                            "kids_clothing_tops_tanktops"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_clothing_tops",
                        "kids_clothing_tops"
                      ]
                    },
                    {
                      "CatName": "Jumpers & Sweatshirts",
                      "CategoryValue": "jumpers-sweatshirts",
                      "CategoriesArray": [
                        {
                          "CatName": "Hoodies",
                          "CategoryValue": "hoodies",
                          "tagCodes": [
                            "kids_clothing_jumperssweatshirt_hoodies",
                            "kids_clothing_jumperssweatshirt_hoodies"
                          ]
                        },
                        {
                          "CatName": "Sweatshirts",
                          "CategoryValue": "sweatshirts",
                          "tagCodes": [
                            "kids_clothing_jumperssweatshirt_sweatshirts",
                            "kids_clothing_jumperssweatshirt_sweatshirts"
                          ]
                        },
                        {
                          "CatName": "Jumpers",
                          "CategoryValue": "jumpers",
                          "tagCodes": [
                            "kids_clothing_jumperssweatshirt_jumpers",
                            "kids_clothing_jumperssweatshirt_jumpers"
                          ]
                        },
                        {
                          "CatName": "Cardigans",
                          "CategoryValue": "cardigans",
                          "tagCodes": [
                            "kids_clothing_jumperssweatshirt_cardigans",
                            "kids_clothing_jumperssweatshirt_cardigans"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_clothing_jumperssweatshirt",
                        "kids_clothing_jumperssweatshirt"
                      ]
                    },
                    {
                      "CatName": "Trousers & Jeans",
                      "CategoryValue": "trousers-jeans",
                      "CategoriesArray": [
                        {
                          "CatName": "Joggers",
                          "CategoryValue": "joggers-sweatpants",
                          "tagCodes": [
                            "kids_clothing_trousersjeans_joggerssweatpants",
                            "kids_clothing_trousersjeans_joggerssweatpants"
                          ]
                        },
                        {
                          "CatName": "Trousers",
                          "CategoryValue": "trousers",
                          "tagCodes": [
                            "kids_clothing_trousersjeans_trousers",
                            "kids_clothing_trousersjeans_trousers"
                          ]
                        },
                        {
                          "CatName": "Leggings",
                          "CategoryValue": "leggings",
                          "tagCodes": [
                            "kids_clothing_trousersjeans_leggingstreggings",
                            "kids_clothing_trousersjeans_leggingstreggings"
                          ]
                        },
                        {
                          "CatName": "Jeans",
                          "CategoryValue": "jeans",
                          "CategoriesArray": [
                            {
                              "CatName": "Skinny",
                              "CategoryValue": "skinny",
                              "tagCodes": [
                                "kids_clothing_trousersjeans_jeans_skinny",
                                "kids_clothing_trousersjeans_jeans_skinny"
                              ]
                            },
                            {
                              "CatName": "Slim",
                              "CategoryValue": "slim",
                              "tagCodes": [
                                "kids_clothing_trousersjeans_jeans_slim",
                                "kids_clothing_trousersjeans_jeans_slim"
                              ]
                            },
                            {
                              "CatName": "Relaxed",
                              "CategoryValue": "relaxed",
                              "tagCodes": [
                                "kids_clothing_trousersjeans_jeans_relaxed",
                                "kids_clothing_trousersjeans_jeans_relaxed"
                              ]
                            },
                            {
                              "CatName": "Joggers",
                              "CategoryValue": "joggers",
                              "tagCodes": [
                                "kids_clothing_trousersjeans_jeans_joggers",
                                "kids_clothing_trousersjeans_jeans_joggers"
                              ]
                            },
                            {
                              "CatName": "Leggings",
                              "CategoryValue": "leggings",
                              "tagCodes": [
                                "kids_clothing_trousersjeans_jeans_leggings",
                                "kids_clothing_trousersjeans_jeans_leggings"
                              ]
                            }
                          ],
                          "tagCodes": [
                            "kids_clothing_trousersjeans_jeans",
                            "kids_clothing_trousersjeans_jeans"
                          ]
                        },
                        {
                          "CatName": "Dungarees",
                          "CategoryValue": "dungarees",
                          "tagCodes": [
                            "kids_clothing_trousersjeans_dungarees",
                            "kids_clothing_trousersjeans_dungarees"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_clothing_trousersjeans",
                        "kids_clothing_trousersjeans"
                      ]
                    },
                    {
                      "CatName": "Skirts",
                      "CategoryValue": "skirts",
                      "tagCodes": [
                        "kids_clothing_skirts",
                        "kids_clothing_skirts"
                      ]
                    },
                    {
                      "CatName": "Shorts",
                      "CategoryValue": "shorts",
                      "tagCodes": [
                        "kids_clothing_shorts",
                        "kids_clothing_shorts"
                      ]
                    },
                    {
                      "CatName": "Jumpsuits & Playsuits",
                      "CategoryValue": "jumpsuits-playsuits",
                      "CategoriesArray": [
                        {
                          "CatName": "Jumpsuits",
                          "CategoryValue": "jumpsuits",
                          "tagCodes": [
                            "kids_clothing_Jumpsuitsplaysuits_jumpsuits",
                            "kids_clothing_Jumpsuitsplaysuits_jumpsuits"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_clothing_jumpsuitsplaysuits",
                        "kids_clothing_jumpsuitsplaysuits"
                      ]
                    },
                    {
                      "CatName": "Sets & Outfits",
                      "CategoryValue": "sets-outfits",
                      "tagCodes": [
                        "kids_clothing_setsoutfits",
                        "kids_clothing_setsoutfits"
                      ]
                    },
                    {
                      "CatName": "Blazers & Suits",
                      "CategoryValue": "blazers-suits",
                      "tagCodes": [
                        "kids_clothing_blazersuits",
                        "kids_clothing_blazersuits"
                      ]
                    },
                    {
                      "CatName": "Nightwear",
                      "CategoryValue": "nightwear",
                      "CategoriesArray": [
                        {
                          "CatName": "Dressing Gowns",
                          "CategoryValue": "dressing-gowns",
                          "tagCodes": [
                            "kids_clothing_nightwear_bathrobes",
                            "kids_clothing_nightwear_bathrobes"
                          ]
                        },
                        {
                          "CatName": "Night Dresses",
                          "CategoryValue": "nighties",
                          "tagCodes": [
                            "kids_clothing_nightwear_nightdress",
                            "kids_clothing_nightwear_nightdress"
                          ]
                        },
                        {
                          "CatName": "Pyjamas",
                          "CategoryValue": "pyjamas",
                          "tagCodes": [
                            "kids_clothing_nightwear_pyjamas",
                            "kids_clothing_nightwear_pyjamas"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_clothing_nightwear",
                        "kids_clothing_nightwear"
                      ]
                    },
                    {
                      "CatName": "Underwear",
                      "CategoryValue": "underwear",
                      "tagCodes": [
                        "kids_clothing_underwear",
                        "kids_clothing_underwear"
                      ]
                    },
                    {
                      "CatName": "Socks & Tights",
                      "CategoryValue": "socks-tights",
                      "CategoriesArray": [
                        {
                          "CatName": "Socks",
                          "CategoryValue": "socks",
                          "tagCodes": [
                            "kids_clothing_sockstights_socks",
                            "kids_clothing_sockstights_socks"
                          ]
                        },
                        {
                          "CatName": "Tights",
                          "CategoryValue": "tights",
                          "tagCodes": [
                            "kids_clothing_sockstights_tights",
                            "kids_clothing_sockstights_tights"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_clothing_sockstights",
                        "kids_clothing_sockstights"
                      ]
                    },
                    {
                      "CatName": "Swimwear",
                      "CategoryValue": "swimwear",
                      "CategoriesArray": [
                        {
                          "CatName": "Bikini",
                          "CategoryValue": "bikinis",
                          "tagCodes": [
                            "kids_clothing_swimwear_bikini",
                            "kids_clothing_swimwear_bikini"
                          ]
                        },
                        {
                          "CatName": "Swim Shorts",
                          "CategoryValue": "swim-shorts",
                          "tagCodes": [
                            "kids_clothing_swimwear_swimshorts",
                            "kids_clothing_swimwear_swimshorts"
                          ]
                        },
                        {
                          "CatName": "Swimsuits",
                          "CategoryValue": "swimsuits",
                          "tagCodes": [
                            "kids_clothing_swimwear_swimsuits",
                            "kids_clothing_swimwear_swimsuits"
                          ]
                        }
                      ],
                      "tagCodes": [
                        "kids_clothing_swimwear",
                        "kids_clothing_swimwear"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_clothing",
                    "kids_clothing"
                  ]
                },
                {
                  "CatName": "Outerwear",
                  "CategoryValue": "outerwear",
                  "tagCodes": [
                    "kids_outerwear",
                    "kids_outerwear"
                  ]
                },
                {
                  "CatName": "Accessories",
                  "CategoryValue": "accessories",
                  "CategoriesArray": [
                    {
                      "CatName": "Hats",
                      "CategoryValue": "hats",
                      "tagCodes": [
                        "kids_accessories_hats",
                        "kids_accessories_hats"
                      ]
                    },
                    {
                      "CatName": "Scarves & Gloves",
                      "CategoryValue": "scarves-gloves",
                      "tagCodes": [
                        "kids_accessories_scarvesgloves",
                        "kids_accessories_scarvesgloves"
                      ]
                    },
                    {
                      "CatName": "Bags",
                      "CategoryValue": "bags",
                      "tagCodes": [
                        "kids_accessories_bags",
                        "kids_accessories_bags"
                      ]
                    },
                    {
                      "CatName": "Belts & Braces",
                      "CategoryValue": "belts-suspenders",
                      "tagCodes": [
                        "kids_accessories_beltssuspenders",
                        "kids_accessories_beltssuspenders"
                      ]
                    },
                    {
                      "CatName": "Hair accessories",
                      "CategoryValue": "hair-accessories",
                      "tagCodes": [
                        "kids_accessories_hairaccessories",
                        "kids_accessories_hairaccessories"
                      ]
                    },
                    {
                      "CatName": "Jewellery",
                      "CategoryValue": "jewellery",
                      "tagCodes": [
                        "kids_accessories_jewellery",
                        "kids_accessories_jewellery"
                      ]
                    },
                    {
                      "CatName": "Ties & Bow Ties",
                      "CategoryValue": "ties-bow-ties",
                      "tagCodes": [
                        "kids_accessories_tiesbowties",
                        "kids_accessories_tiesbowties"
                      ]
                    },
                    {
                      "CatName": "Sunglasses",
                      "CategoryValue": "sunglasses",
                      "tagCodes": [
                        "kids_accessories_sunglasses",
                        "kids_accessories_sunglasses"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "kids_accessories",
                    "kids_accessories"
                  ]
                },
                {
                  "CatName": "Shoes",
                  "CategoryValue": "shoes",
                  "tagCodes": [
                    "kids_shoes",
                    "kids_shoes"
                  ]
                },
                {
                  "CatName": "Fancy Dress Costumes",
                  "CategoryValue": "fancy-dress-costumes",
                  "tagCodes": [
                    "kids_fancy_dress",
                    "kids_costumes",
                    "kids_fancy_dress"
                  ]
                },
                {
                  "CatName": "Sportswear",
                  "CategoryValue": "sportswear",
                  "tagCodes": [
                    "kids_sportswear",
                    "kids_sportswear"
                  ]
                }
              ],
              "tagCodes": []
            },
            {
              "CatName": "Trending now",
              "CategoryValue": "seasonal-trending",
              "CategoriesArray": [
                {
                  "CatName": "Fun & Festive Shop",
                  "CategoryValue": "festive-occasions",
                  "CategoriesArray": [
                    {
                      "CatName": "Girls 2-14+ Y",
                      "CategoryValue": "for-girls-2-14-y",
                      "tagCodes": [
                        "MCAK_SGMY_RAMADAN_GIRLS",
                        "MCAK_SGMY_S5_VP_W9_4025T_GIRL_RAMADAN",
                        "MCAK_SGMY_RAMADAN_GIRLS",
                        "MCAK_SGMY_S5_VP_W9_4025T_GIRL_RAMADAN"
                      ]
                    },
                    {
                      "CatName": "Boys 2-14+ Y",
                      "CategoryValue": "for-boys-2-14-y",
                      "tagCodes": [
                        "MCAK_SGMY_RAMADAN_BOYS",
                        "MCAK_SGMY_S5_VP_W9_4025T_BOY_RAMADAN",
                        "MCAK_SGMY_RAMADAN_BOYS",
                        "MCAK_SGMY_S5_VP_W9_4025T_BOY_RAMADAN"
                      ]
                    }
                  ],
                  "tagCodes": [
                    "MCAK_SGMY_RAMADAN_GIRLS",
                    "MCAK_SGMY_RAMADAN_BOYS",
                    "4025T_Kids",
                    "MCAK_SGMY_RAMADAN_BOYS",
                    "MCAK_SGMY_RAMADAN_GIRLS",
                    "4025T_Kids"
                  ]
                },
                {
                  "CatName": "Basics",
                  "CategoryValue": "basics",
                  "tagCodes": [
                    "kids_basic",
                    "kids_basics"
                  ]
                },
                {
                  "CatName": "Pokemon",
                  "CategoryValue": "pokemon",
                  "tagCodes": [
                    "MCAK_SGMY_S5_FP_POKEMON",
                    "MCAK_SGMY_S5_FP_POKEMON"
                  ]
                },
                {
                  "CatName": "Multipacks",
                  "CategoryValue": "multipacks",
                  "tagCodes": [
                    "kids_multipack",
                    "kids_multipacks"
                  ]
                },
                {
                  "CatName": "Disney, Marvel & Cartoon",
                  "CategoryValue": "character",
                  "tagCodes": [
                    "kids_characters",
                    "kids_character"
                  ]
                },
                {
                  "CatName": "Kids Exclusive",
                  "CategoryValue": "kids-exclusive",
                  "tagCodes": [
                    "kids_kids_exclusive",
                    "kids_kids_exclusive"
                  ]
                }
              ],
              "tagCodes": []
            }
          ],
          "tagCodes": [
            "kids_all"
          ]
        },
        {
          "CatName": "Outlet",
          "CategoryValue": "outlet",
          "CategoriesArray": [
            {
              "CatName": "Ladies",
              "CategoryValue": "ladies",
              "CategoriesArray": [
                {
                  "CatName": "Clothes",
                  "CategoryValue": "clothes",
                  "tagCodes": [
                    "OUTLET_PL_LADIES_CLOTHES"
                  ]
                },
                {
                  "CatName": "Shoes & Accessories",
                  "CategoryValue": "shoes---accessories",
                  "tagCodes": [
                    "OUTLET_PL_LADIES_ACC"
                  ]
                }
              ],
              "tagCodes": []
            },
            {
              "CatName": "Men",
              "CategoryValue": "men",
              "CategoriesArray": [
                {
                  "CatName": "Clothes",
                  "CategoryValue": "clothes",
                  "tagCodes": [
                    "OUTLET_PLN_MEN"
                  ]
                },
                {
                  "CatName": "Shoes & Accessories",
                  "CategoryValue": "shoes---accessories",
                  "tagCodes": []
                }
              ],
              "tagCodes": []
            },
            {
              "CatName": "Kids",
              "CategoryValue": "kids",
              "CategoriesArray": [
                {
                  "CatName": "Baby sizes 0-24 months",
                  "CategoryValue": "baby-sizes-0-24-m",
                  "tagCodes": [
                    "OUTLET_PLN_BABY"
                  ]
                },
                {
                  "CatName": "Girls sizes 18 months - 10 years",
                  "CategoryValue": "girls-sizes-18-months-10y",
                  "tagCodes": [
                    "OUTLET_PLN_SMALLGIRL"
                  ]
                },
                {
                  "CatName": "Boys sizes 18 months - 10 years",
                  "CategoryValue": "boys-sizes-18-months-10y",
                  "tagCodes": [
                    "OUTLET_PLN_SMALLBOY"
                  ]
                },
                {
                  "CatName": "Girls sizes 8-14+ years",
                  "CategoryValue": "girls-sizes-8-14y",
                  "tagCodes": [
                    "OUTLET_PLN_BIGGIRL"
                  ]
                },
                {
                  "CatName": "Boys sizes 8-14+ years",
                  "CategoryValue": "boys-sizes-8-14y",
                  "tagCodes": [
                    "OUTLET_PLN_BIGBOY"
                  ]
                }
              ],
              "tagCodes": []
            },
            {
              "CatName": "Home",
              "CategoryValue": "home",
              "CategoriesArray": [
                {
                  "CatName": "Products",
                  "CategoryValue": "products",
                  "tagCodes": []
                }
              ],
              "tagCodes": []
            }
          ],
          "tagCodes": []
        },
        {
          "CatName": "SALE",
          "CategoryValue": "sale",
          "tagCodes": []
        }
      ]
    );
    
    const [Sub_Categories, setSubCategories] = useState([]);

    const clothes = ["Tops", "Dresses", "Pants", "Denim", "Sweaters", "T-Shirts", "Jackets", "Activewear", "Browse All"];
    const Accessories = ["Watches", "Wallets", "Bags", "Sunglasses", "Hats", "Belts"];

    const [sidebar, set_show_side_bar] = useState(false);
    const [slide_bar, set_show_slide_bar] = useState(false);
    const [show_search_input, setSearch] = useState(false);
    const [catName, setCatName] = useState('');

    const category_api_request = {
      method: 'GET',
      url: process.env.REACT_APP_API_URL + '/categories/list',
      params: {lang: 'en', country: 'asia2'},
      headers: {
        'X-RapidAPI-Host': process.env.REACT_APP_Category_X_RapidAPI_Host,
        'X-RapidAPI-Key': process.env.REACT_APP_Category_X_RapidAPI_Key
      }
    };

    useEffect(() => {
        // axios.request(category_api_request).then(function (response) {
        //   let categories = [];
        //   response.data.forEach(res => {
        //     categories.push(res);
        //   });
        //   setCategories([...categories]);
        // }).catch(function (error) {
        //   console.error(error);
        // }).finally(() => {
        //   console.log(Categories);
        // });
    }, []);

    const show_slide_bar = (cat_name) => {
      if(catName === cat_name && slide_bar === true){
        set_show_slide_bar(false);
      }else{
        setCatName(cat_name);
        const new_categories = Categories.filter(name => name.CatName === cat_name);
        setSubCategories([...new_categories]);
        set_show_slide_bar(true);
      }
    }

    useImperativeHandle(ref, () => ({

      closeSlideBar() {
        set_show_slide_bar(false);
      }
  
    }));

    return (
      <div id="nav-bar">
        {/* Begin of the sm side Navbar */} 
        <div className={`fixed inset-0 flex z-40 lg:hidden ease-in-out duration-500 ${ sidebar ? "-translate-x-0" : "-translate-x-full"}`}>
            
          <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
              <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                  <button onClick={() => set_show_side_bar(!sidebar)} type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400">
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
              </div>

              <div className="mt-2">
                  <div className="border-b border-gray-200">
                    <div className="-mb-px flex px-4 space-x-8" aria-orientation="horizontal">
                        <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Women</button>
                        <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" type="button">Men</button>
                    </div>
                  </div>

                  <div className="pt-10 pb-8 px-4 space-y-10">
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="group relative text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                            <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." className="object-center object-cover"/>
                        </div>
                        <a href="#" className="mt-6 block font-medium text-gray-900">
                            <span className="absolute z-10 inset-0" aria-hidden="true"></span>
                            New Arrivals
                        </a>
                        <p aria-hidden="true" className="mt-1">Shop now</p>
                        </div>

                        <div className="group relative text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                            <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." className="object-center object-cover"/>
                        </div>
                        <a href="#" className="mt-6 block font-medium text-gray-900">
                            <span className="absolute z-10 inset-0" aria-hidden="true"></span>
                            Basic Tees
                        </a>
                        <p aria-hidden="true" className="mt-1">Shop now</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900">Clothing</p>
                        <ul className="mt-6 flex flex-col space-y-6">
                            {clothes && clothes.map( (name, key) => { 
                                return (
                                  <li className="flow-root" key={key}>
                                      <a href="#" className="-m-2 p-2 block text-gray-500">{name}</a>
                                  </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900">Accessories</p>
                        <ul role="list" className="mt-6 flex flex-col space-y-6">
                            {Accessories && Accessories.map((name, key) => { 
                                return (
                                  <li className="flow-root" key={key}>
                                      <a href="#" className="-m-2 p-2 block text-gray-500">{name}</a>
                                  </li>
                                )
                            })}
                        </ul>
                    </div>

                  </div>

                  <div className="pt-10 pb-8 px-4 space-y-10">
                    <div className="grid grid-cols-2 gap-x-4">
                        <div className="group relative text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." className="object-center object-cover"/>
                        </div>
                        <a href="#" className="mt-6 block font-medium text-gray-900">
                            <span className="absolute z-10 inset-0" aria-hidden="true"></span>
                            New Arrivals
                        </a>
                        <p aria-hidden="true" className="mt-1">Shop now</p>
                        </div>

                        <div className="group relative text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                            <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." className="object-center object-cover"/>
                        </div>
                        <a href="#" className="mt-6 block font-medium text-gray-900">
                            <span className="absolute z-10 inset-0" aria-hidden="true"></span>
                            Artwork Tees
                        </a>
                        <p aria-hidden="true" className="mt-1">Shop now</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900">Clothing</p>
                        <ul className="mt-6 flex flex-col space-y-6">
                            {clothes && clothes.map( (name, key) => { 
                                return (
                                  <li className="flow-root" key={key}>
                                      <a href="#" className="-m-2 p-2 block text-gray-500">{name}</a>
                                  </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900">Accessories</p>
                        <ul role="list" className="mt-6 flex flex-col space-y-6">
                            {Accessories && Accessories.map((name, key) => { 
                                return (
                                  <li className="flow-root" key={key}>
                                      <a href="#" className="-m-2 p-2 block text-gray-500">{name}</a>
                                  </li>
                                )
                            })}
                        </ul>
                    </div>

                  </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Company</a>
                  </div>

                  <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Stores</a>
                  </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Sign in</a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Create account</a>
                  </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 p-2 flex items-center">
                    <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="w-5 h-auto block flex-shrink-0"/>
                    <span className="ml-3 block text-base font-medium text-gray-900"> CAD </span>
                    <span className="sr-only">, change currency</span>
                  </a>
              </div>
              </div>  
          </div>
        {/* End of sm side Navbar */}

        {/* > sm Navbar */}
        <header className="relative bg-hero-pattern">
          <p onClick={() => set_show_slide_bar(false)} className="bg-gray-100 text-gray-900 h-10 flex items-center justify-center text-sm font-medium px-4 sm:px-6 lg:px-8">Get free delivery on orders over $100</p>

          <nav className="px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="h-16 flex items-center">
                <button onClick={() => set_show_side_bar(!sidebar)} type="button" className="bg-white p-2 rounded-md text-gray-400 lg:hidden">
                  <span className="sr-only">Open menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                <div className="ml-4 flex lg:ml-0">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt=""/>
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="h-full flex space-x-8">

                    <div className="flex">
                      <div className="relative flex space-x-8">
                        {Categories.length > 0 && Categories.map((category, key) => {
                          return (
                            <button key={key} onClick={() => show_slide_bar(category.CatName)} type="button"
                              className="border-transparent text-white hover:text-gray-100 relative
                                        z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px">
                              {category.CatName}
                            </button>
                          )
                        })}
                      </div>

                      <div className={`absolute top-full inset-x-0 text-sm text-gray-500 ${slide_bar ? "block" : "hidden"}`}>

                        <div className={`relative z-20 bg-gray-50 opacity-95 ease-in-out duration-500 shadow ${ slide_bar ? "translate-y-0" : "-translate-x-full"}`}>
                          <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-16">
                              
                              <div className="grid grid-cols-6 gap-y-10 gap-x-8 text-sm">
                                {Sub_Categories[0] && Sub_Categories[0].CategoriesArray && Sub_Categories[0].CategoriesArray.map((category, key) => {
                                    return (
                                      <div key={key}>
                                        <p className="font-medium text-yellow-600">{category.CatName}</p>
                                        <ul className="mt-6 flex flex-col space-y-6">
                                          {category.CategoriesArray && category.CategoriesArray.map( (name, key) => { 
                                              if(key > 5){
                                                return 
                                              }else {
                                                return (
                                                  <li className="flow-root" key={key}>
                                                    <a href="#" className="-m-2 p-2 block text-gray-500 hover:text-gray-800">{name.CatName}</a>
                                                  </li>
                                                )
                                              }
                                            })
                                          }
                                        </ul>
                                      </div>
                                    )
                                })}
                              </div>

                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>

                  </div>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-50">Sign in</a>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-50">Create account</a>
                  </div>

                  <div className="hidden lg:ml-8 lg:flex">
                    <a href="#" className="text-white hover:text-gray-50 flex items-center">
                      <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="w-5 h-auto block flex-shrink-0"/>
                      <span className="ml-3 block text-sm font-medium"> CAD </span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </div>

                  <div className="flex justify-center items-center lg:ml-6">
                  {show_search_input && <input type="text" className="block w-44 h-8 px-2 bg-yellow-500 border shadow text-sm border-gray-300 rounded-md"/>}
                    <button className="p-2 text-white hover:text-gray-50" onClick={() => setSearch(!show_search_input)}>
                      <span className="sr-only">Search</span>
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>

                  <div className="ml-4 flow-root lg:ml-6">
                    <a href="#" className="group -m-2 p-2 flex items-center">
                      <svg className="flex-shrink-0 h-6 w-6 text-white group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <span className="ml-2 text-sm font-medium text-white group-hover:text-gray-800">0</span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
});

export default Navbar;