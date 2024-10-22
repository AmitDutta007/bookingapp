import "./featuredProperties.css";

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Comfort Suites Airport</span>
                <span className="fpCity">Austin</span>
                <span className="fpPrice">Starting from $140</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Four Seasons Hotel</span>
                <span className="fpCity">Lisbon</span>
                <span className="fpPrice">Starting from $99</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Hilton Garden Inn</span>
                <span className="fpCity">Berlin</span>
                <span className="fpPrice">Starting from $105</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;





// {%- liquid
//     for tag in article.tags
//       if tag contains 'product_'
//         assign prod_handle = tag | split: '_'
//         assign blog_prod = all_products[prod_handle[1]]
//       endif
//     endfor
//   %}
//   {% if blog_prod %}
//     <hr>
//     <img src="{{ blog_prod.featured_image | img_url: '100x'}}"><br>
//     <p>
//       <a href="{{blog_prod.url}}">{{ blog_prod.title }}</a>
//     </p>
//     <p>{{ blog_prod.price | money }}</p>
//   {% endif %}



//   <div class="upsell-cross-sell-container">
//   <h3>Related Products</h3>
//   {% for item in cart.items %}
//     {% assign up_sell_products = item.product.metafields.custom.up_sell_products.value %}
//     {% for product in up_sell_products %}
//       {% render 'card-product',
//         card_product: product,
//         media_aspect_ratio: section.settings.image_ratio,
//         show_secondary_image: section.settings.show_secondary_image,
//         show_vendor: section.settings.show_vendor
//       %}
//       <form method="post" action="/cart/add">
//         <input type="hidden" name="id" value="{{ product.variants.first.id }}">
//         <button type="submit" class="btn btn--primary">Add to Cart</button>
//       </form>
//     {% endfor %}
//   {% endfor %}
// </div>

// <style>
//     .upsell-cross-sell-container .card.card--standard.card--media {
//       display: flex;
//       flex-direction: row;
//   }
// </style>
// {% render 'cart-upsell' %}
