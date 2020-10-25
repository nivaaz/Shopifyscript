<!doctype html>
<html class="no-js" lang="{{ shop.locale }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="{{ settings.color_button }}">

  <link rel="preconnect" href="https://cdn.shopify.com" crossorigin>
  <link rel="preconnect" href="https://fonts.shopify.com" crossorigin>
  <link rel="preconnect" href="https://monorail-edge.shopifysvc.com">

  {%- assign header_font = settings.type_header_font -%}
  {%- assign base_font = settings.type_base_font -%}
  {%- assign base_font_bolder = base_font | font_modify: 'weight', 'bolder' -%}
  {%- assign base_font_bold = base_font | font_modify: 'weight', 'bold' -%}
  {%- assign base_font_italic = base_font | font_modify: 'style', 'italic' -%}
  {%- assign base_font_bold_italic = base_font_bold | font_modify: 'style', 'italic' -%}

  <link rel="preload" href="{{ 'theme.css' | asset_url }}" as="style">
  <link rel="preload" as="font" href="{{ header_font | font_url }}" type="font/woff2" crossorigin>
  <link rel="preload" as="font" href="{{ base_font | font_url }}" type="font/woff2" crossorigin>
  <link rel="preload" as="font" href="{{ base_font_bold | font_url }}" type="font/woff2" crossorigin>
  <link rel="preload" href="{{ 'theme.js' | asset_url }}" as="script">
  <link rel="preload" href="{{ 'lazysizes.js' | asset_url }}" as="script">

  {%- if canonical_url != blank  -%}
    <link rel="canonical" href="{{ canonical_url }}">
  {%- endif -%}

  {%- if settings.favicon != blank -%}
    <link rel="shortcut icon" href="{{ settings.favicon | img_url: '32x32' }}" type="image/png">
  {%- endif -%}

  {%- capture seo_title -%}
    {%- if request.page_type == 'search' and search.performed == true -%}
      {{ 'general.search.heading' | t: count: search.results_count }}: {{ 'general.search.results_with_count' | t: terms: search.terms, count: search.results_count }}
    {%- else -%}
      {{ page_title }}
    {%- endif -%}
    {%- if current_tags -%}
      {%- assign meta_tags = current_tags | join: ', ' -%} &ndash; {{ 'general.meta.tags' | t: tags: meta_tags -}}
    {%- endif -%}
    {%- if current_page != 1 -%}
      &ndash; {{ 'general.meta.page' | t: page: current_page }}
    {%- endif -%}
    {%- assign escaped_page_title = page_title | escape -%}
    {%- unless escaped_page_title contains shop.name -%}
      &ndash; {{ shop.name }}
    {%- endunless -%}
  {%- endcapture -%}
  <title>{{ seo_title | strip }}</title>

  {%- if page_description -%}
    <meta name="description" content="{{ page_description | escape }}">
  {%- endif -%}

  {% include 'social-meta-tags' %}
  {% include 'css-variables' %}

  <style>*,::after,::before{box-sizing:border-box}body{margin:0}body,html{background-color:var(--color-body)}body,button{font-size:calc(var(--font-size-base) * 1px);font-family:var(--font-stack-body);font-style:var(--font-style-body);font-weight:var(--font-weight-body);color:var(--color-text);line-height:1.5}body,button{-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%}.border-bottom{border-bottom:1px solid var(--color-border)}.btn--link{background-color:transparent;border:0;margin:0;color:var(--color-text);text-align:left}.text-right{text-align:right}.icon{display:inline-block;width:20px;height:20px;vertical-align:middle;fill:currentColor}.icon__fallback-text,.visually-hidden{position:absolute!important;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0}svg.icon:not(.icon--full-color) circle,svg.icon:not(.icon--full-color) ellipse,svg.icon:not(.icon--full-color) g,svg.icon:not(.icon--full-color) line,svg.icon:not(.icon--full-color) path,svg.icon:not(.icon--full-color) polygon,svg.icon:not(.icon--full-color) polyline,svg.icon:not(.icon--full-color) rect,symbol.icon:not(.icon--full-color) circle,symbol.icon:not(.icon--full-color) ellipse,symbol.icon:not(.icon--full-color) g,symbol.icon:not(.icon--full-color) line,symbol.icon:not(.icon--full-color) path,symbol.icon:not(.icon--full-color) polygon,symbol.icon:not(.icon--full-color) polyline,symbol.icon:not(.icon--full-color) rect{fill:inherit;stroke:inherit}li{list-style:none}.list--inline{padding:0;margin:0}.list--inline>li{display:inline-block;margin-bottom:0;vertical-align:middle}a{color:var(--color-text);text-decoration:none}.h1,.h2,h1,h2{margin:0 0 17.5px;font-family:var(--font-stack-header);font-style:var(--font-style-header);font-weight:var(--font-weight-header);line-height:1.2;overflow-wrap:break-word;word-wrap:break-word}.h1 a,.h2 a,h1 a,h2 a{color:inherit;text-decoration:none;font-weight:inherit}.h1,h1{font-size:calc(((var(--font-h1-desktop))/ (var(--font-size-base))) * 1em);text-transform:none;letter-spacing:0}@media only screen and (max-width:749px){.h1,h1{font-size:calc(((var(--font-h1-mobile))/ (var(--font-size-base))) * 1em)}}.h2,h2{font-size:calc(((var(--font-h2-desktop))/ (var(--font-size-base))) * 1em);text-transform:uppercase;letter-spacing:.1em}@media only screen and (max-width:749px){.h2,h2{font-size:calc(((var(--font-h2-mobile))/ (var(--font-size-base))) * 1em)}}p{color:var(--color-body-text);margin:0 0 19.44444px}@media only screen and (max-width:749px){p{font-size:calc(((var(--font-size-base) - 1)/ (var(--font-size-base))) * 1em)}}p:last-child{margin-bottom:0}@media only screen and (max-width:749px){.small--hide{display:none!important}}.grid{list-style:none;margin:0;padding:0;margin-left:-30px}.grid::after{content:'';display:table;clear:both}@media only screen and (max-width:749px){.grid{margin-left:-22px}}.grid::after{content:'';display:table;clear:both}.grid--no-gutters{margin-left:0}.grid--no-gutters .grid__item{padding-left:0}.grid--table{display:table;table-layout:fixed;width:100%}.grid--table>.grid__item{float:none;display:table-cell;vertical-align:middle}.grid__item{float:left;padding-left:30px;width:100%}@media only screen and (max-width:749px){.grid__item{padding-left:22px}}.grid__item[class*="--push"]{position:relative}@media only screen and (min-width:750px){.medium-up--one-quarter{width:25%}.medium-up--push-one-third{width:33.33%}.medium-up--one-half{width:50%}.medium-up--push-one-third{left:33.33%;position:relative}}.site-header{position:relative;background-color:var(--color-body)}@media only screen and (max-width:749px){.site-header{border-bottom:1px solid var(--color-border)}}@media only screen and (min-width:750px){.site-header{padding:0 55px}.site-header.logo--center{padding-top:30px}}.site-header__logo{margin:15px 0}.logo-align--center .site-header__logo{text-align:center;margin:0 auto}@media only screen and (max-width:749px){.logo-align--center .site-header__logo{text-align:left;margin:15px 0}}@media only screen and (max-width:749px){.site-header__logo{padding-left:22px;text-align:left}.site-header__logo img{margin:0}}.site-header__logo-link{display:inline-block;word-break:break-word}@media only screen and (min-width:750px){.logo-align--center .site-header__logo-link{margin:0 auto}}.site-header__logo-image{display:block}@media only screen and (min-width:750px){.site-header__logo-image{margin:0 auto}}.site-header__logo-image img{width:100%}.site-header__logo-image--centered img{margin:0 auto}.site-header__logo img{display:block}.site-header__icons{position:relative;white-space:nowrap}@media only screen and (max-width:749px){.site-header__icons{width:auto;padding-right:13px}.site-header__icons .btn--link,.site-header__icons .site-header__cart{font-size:calc(((var(--font-size-base))/ (var(--font-size-base))) * 1em)}}.site-header__icons-wrapper{position:relative;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center;-webkit-justify-content:flex-end;-ms-justify-content:flex-end;justify-content:flex-end}.site-header__account,.site-header__cart,.site-header__search{position:relative}.site-header__search.site-header__icon{display:none}@media only screen and (min-width:1400px){.site-header__search.site-header__icon{display:block}}.site-header__search-toggle{display:block}@media only screen and (min-width:750px){.site-header__account,.site-header__cart{padding:10px 11px}}.site-header__cart-title,.site-header__search-title{position:absolute!important;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;display:block;vertical-align:middle}.site-header__cart-title{margin-right:3px}.site-header__cart-count{display:flex;align-items:center;justify-content:center;position:absolute;right:.4rem;top:.2rem;font-weight:700;background-color:var(--color-btn-primary);color:var(--color-btn-primary-text);border-radius:50%;min-width:1em;height:1em}.site-header__cart-count span{font-family:HelveticaNeue,"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:calc(11em / 16);line-height:1}@media only screen and (max-width:749px){.site-header__cart-count{top:calc(7em / 16);right:0;border-radius:50%;min-width:calc(19em / 16);height:calc(19em / 16)}}@media only screen and (max-width:749px){.site-header__cart-count span{padding:.25em calc(6em / 16);font-size:12px}}.site-header__menu{display:none}@media only screen and (max-width:749px){.site-header__icon{display:inline-block;vertical-align:middle;padding:10px 11px;margin:0}}@media only screen and (min-width:750px){.site-header__icon .icon-search{margin-right:3px}}.announcement-bar{z-index:10;position:relative;text-align:center;border-bottom:1px solid transparent;padding:2px}.announcement-bar__link{display:block}.announcement-bar__message{display:block;padding:11px 22px;font-size:calc(((16)/ (var(--font-size-base))) * 1em);font-weight:var(--font-weight-header)}@media only screen and (min-width:750px){.announcement-bar__message{padding-left:55px;padding-right:55px}}.site-nav{position:relative;padding:0;text-align:center;margin:25px 0}.site-nav a{padding:3px 10px}.site-nav__link{display:block;white-space:nowrap}.site-nav--centered .site-nav__link{padding-top:0}.site-nav__link .icon-chevron-down{width:calc(8em / 16);height:calc(8em / 16);margin-left:.5rem}.site-nav__label{border-bottom:1px solid transparent}.site-nav__link--active .site-nav__label{border-bottom-color:var(--color-text)}.site-nav__link--button{border:none;background-color:transparent;padding:3px 10px}.site-header__mobile-nav{z-index:11;position:relative;background-color:var(--color-body)}@media only screen and (max-width:749px){.site-header__mobile-nav{display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center}}.mobile-nav--open .icon-close{display:none}.main-content{opacity:0}.main-content .shopify-section{display:none}.main-content .shopify-section:first-child{display:inherit}.critical-hidden{display:none}</style>

  <script>
    window.performance.mark('debut:theme_stylesheet_loaded.start');

    function onLoadStylesheet() {
      performance.mark('debut:theme_stylesheet_loaded.end');
      performance.measure('debut:theme_stylesheet_loaded', 'debut:theme_stylesheet_loaded.start', 'debut:theme_stylesheet_loaded.end');

      var url = "{{ 'theme.css' | asset_url }}";
      var link = document.querySelector('link[href="' + url + '"]');
      link.loaded = true;
      link.dispatchEvent(new Event('load'));
    }
  </script>

  <link rel="stylesheet" href="{{ 'theme.css' | asset_url }}" type="text/css" media="print" onload="this.media='all';onLoadStylesheet()">
   <script async src="https://demo.widget.m8buy.co/general/main.js" onload="loadWidget()" type="text/javascript"></script>

<div id="m8-widget-root"></div>
<script type="text/javascript"> 
function loadWidget() 
{ console.log("loading m8buy widget"); widgetApp.init({width: 100, height: 100}) }; 
</script>

<style> #m8-widget-root 
{position: absolute; bottom: 10; left: 10;}
</style>
  
  <style>
    {{ header_font | font_face: font_display: 'swap' }}
    {{ base_font | font_face: font_display: 'swap' }}
    {{ base_font_bold | font_face: font_display: 'swap' }}
    {{ base_font_bolder | font_face: font_display: 'swap' }}
    {{ base_font_italic | font_face: font_display: 'swap' }}
    {{ base_font_bold_italic | font_face: font_display: 'swap' }}
  </style>

  <script>
    var theme = {
      breakpoints: {
        medium: 750,
        large: 990,
        widescreen: 1400
      },
      strings: {
        addToCart: {{ 'products.product.add_to_cart' | t | json }},
        soldOut: {{ 'products.product.sold_out' | t | json }},
        unavailable: {{ 'products.product.unavailable' | t | json }},
        regularPrice: {{ 'products.product.regular_price' | t | json }},
        salePrice: {{ 'products.product.sale_price' | t | json }},
        sale: {{ 'products.product.on_sale' | t | json }},
        fromLowestPrice: {{ 'products.product.from_lowest_price_html' | t: lowest_price: '[price]' | json }},
        vendor: {{'products.product.vendor' | t | json }},
        showMore: {{ 'general.filters.show_more' | t | json }},
        showLess: {{ 'general.filters.show_less' | t | json }},
        searchFor: {{ 'general.search.search_for' | t | json }},
        addressError: {{ 'sections.map.address_error' | t | json }},
        addressNoResults: {{ 'sections.map.address_no_results' | t | json }},
        addressQueryLimit: {{ 'sections.map.address_query_limit_html' | t | json }},
        authError: {{ 'sections.map.auth_error_html' | t | json }},
        newWindow: {{ 'general.accessibility.link_messages.new_window' | t | json }},
        external: {{ 'general.accessibility.link_messages.external' | t | json }},
        newWindowExternal: {{ 'general.accessibility.link_messages.new_window_and_external' | t | json }},
        removeLabel: {{ 'cart.label.remove' | t: product: '[product]' | json }},
        update: {{ 'cart.label.update' | t | json }},
        quantity: {{ 'cart.label.quantity' | t | json }},
        discountedTotal: {{ 'cart.label.discounted_total' | t | json }},
        regularTotal: {{ 'cart.label.regular_total' | t | json }},
        priceColumn: {{ 'cart.label.price_column' | t | json }},
        quantityMinimumMessage: {{ 'products.product.quantity_minimum_message' | t | json }},
        cartError: {{ 'cart.general.cart_error' | t | json }},
        removedItemMessage: {{ 'cart.general.removed_item_html' | t: quantity: '[quantity]', link: '[link]' | json }},
        unitPrice: {{ 'products.product.unit_price_label' | t | json }},
        unitPriceSeparator: {{ 'general.accessibility.unit_price_separator' | t | json }},
        oneCartCount: {{ 'cart.popup.cart_count' | t: count: 1 | json }},
        otherCartCount: {{ 'cart.popup.cart_count' | t: count: '[count]' | json }},
        quantityLabel: {{ 'cart.popup.quantity_label' | t: quantity_count: '[count]' | json }},
        products: {{ 'general.search.products' | t | json }},
        loading: {{ 'general.search.loading' | t | json }},
        number_of_results: {{ 'general.search.number_of_results' | t: result_number: '[result_number]', results_count: '[results_count]' | json }},
        number_of_results_found: {{ 'general.search.number_of_results_found' | t: results_count: '[results_count]' | json }},
        one_result_found: {{ 'general.search.one_result_found' | t | json }}
      },
      moneyFormat: {{ shop.money_format | json }},
      moneyFormatWithCurrency: {{ shop.money_with_currency_format | json }},
      settings: {
        predictiveSearchEnabled: {{ settings.predictive_search_enabled | json }},
        predictiveSearchShowPrice: {{ settings.predictive_search_show_price | json }},
        predictiveSearchShowVendor: {{ settings.predictive_search_show_vendor | json }}
      },
      stylesheet: "{{ 'theme.css' | asset_url }}"
    }

    document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
  </script>

  {%- if request.page_type contains 'customers/' -%}
    <script src="{{ 'shopify_common.js' | shopify_asset_url }}" defer="defer"></script>
  {%- endif -%}

  <script src="{{ 'theme.js' | asset_url }}" defer="defer"></script>
  <script src="{{ 'lazysizes.js' | asset_url }}" async="async"></script>

  <script type="text/javascript">
    if (window.MSInputMethodContext && document.documentMode) {
      var scripts = document.getElementsByTagName('script')[0];
      var polyfill = document.createElement("script");
      polyfill.defer = true;
      polyfill.src = "{{ 'ie11CustomProperties.min.js' | asset_url }}";

      scripts.parentNode.insertBefore(polyfill, scripts);
    }
  </script>

  {{ content_for_header }}
</head>

<body class="template-{{ request.page_type | handle }}">

  <a class="in-page-link visually-hidden skip-link" href="#MainContent">{{ 'general.accessibility.skip_to_content' | t }}</a>

  {%- if settings.enable_ajax -%}
    {% include 'cart-popup' %}
  {%- endif -%}

  {% section 'header' %}

  <div class="page-container drawer-page-content" id="PageContainer">

    <main class="main-content js-focus-hidden" id="MainContent" role="main" tabindex="-1">
      {{ content_for_layout }}
    </main>

    {% section 'footer' %}

    <div id="slideshow-info" class="visually-hidden" aria-hidden="true">
      {{- 'sections.slideshow.navigation_instructions' | t -}}
    </div>

  </div>

  <ul hidden>
    <li id="a11y-refresh-page-message">{{ 'general.accessibility.refresh_page' | t }}</li>
    <li id="a11y-selection-message">{{ 'general.accessibility.selection_help' | t }}</li>
  </ul>
</body>
</html>

<!-- Begin Shopify-Afterpay JavaScript Snippet (v1.0.9) -->
<script type="text/javascript">
// Overrides:
// var afterpay_min = 0.04;            // As per your Afterpay contract.
// var afterpay_max = 2000.00;         // As per your Afterpay contract.
// var afterpay_cbt_enabled = false;   // As per your Afterpay contract; change to true to display Cross-Border Trade artwork (for AU/NZ).
// var afterpay_logo_theme = 'colour'; // Can be 'colour', 'black' or 'white'.
// var afterpay_product_selector = '#product-price-selector';
 var afterpay_cart_integration_enabled = true;
 var afterpay_cart_static_selector = '#cart-subtotal-selector';

// Non-editable fields:
var afterpay_shop_currency = {{ shop.currency | json }};
var afterpay_cart_currency = {{ cart.currency.iso_code | json }};
var afterpay_shop_money_format = {{ shop.money_format | json }};
var afterpay_shop_permanent_domain = {{ shop.permanent_domain | json }};
var afterpay_theme_name = {{ theme.name | json }};
var afterpay_product = {{ product | json }};
var afterpay_current_variant = {{ product.selected_or_first_available_variant | json }};
var afterpay_cart_total_price = {{ cart.total_price | json }};
var afterpay_js_snippet_version = '1.0.9';
  var logo_asset = "https://drive.google.com/file/d/1l5TQPEOu3xN4valBG-KRW9Xq6l2v37v-/view?usp=sharing";
</script>

<script>
var Afterpay = {
  supportedTheme: !1,
  mutationObserver: !1,
  arrayContainsElement: function (t, e) {
    var a;
    if (Array.prototype.indexOf) return -1 < t.indexOf(e);
    for (a = 0; a < t.length; a++) if (t[a] == e) return !0;
    return !1;
  },
  closePopup: function (t, e) {
    e.preventDefault(), t("#afterpay-popup-wrapper").hide();
  },
  commonElements: {
    product: {
      price_selector: [
        "#ProductPrice",
        "#product-price",
        "#ProductSection .product-single__prices",
        ".product-details .product-price",
        ".product--container .product-pricing",
        ".productForm .product-price",
        ".product-single__meta .product__price",
        ".product__content .product__price",
        "p.modal_price",
        "ul.product-meta",
        "ul.product-single__meta-list",
        ".product-single__price",
        ".product-single__prices",
        ".product__price",
        ".price",
        ".prices",
        ".product_price",
        ".modal_price",
      ],
    },
    cart: {
      static_page: {
        subtotal_selector: [
          "#CartSubtotal",
          "form .subtotal_amount",
          ".cart__footer .cart__subtotal",
          ".cart-footer .cart-footer__subtotal",
          "span.cart__subtotal",
          ".h1.cart-subtotal--price",
          ".cart__row--table:last",
          ".cart-subtotal",
        ],
      },
    },
    footer: {
      logo_container: [
        "footer ul.payment-icons",
        "footer div.payment-methods__inner",
        "footer .payment-options",
        "footer ul.payment-icons--list",
        "footer .payment-types ul",
        "footer .site-footer-payment-types",
        "footer #payment",
        "footer ul.payment-icon-list",
        ".footer .payment_methods",
        "footer ul.Footer__PaymentList",
        "footer .payment-types",
        ".page-footer ul.payment-methods",
        "#pagefooter .payment-methods",
        "footer ul.footer__icons-items",
        "footer div.payment_methods",
        "footer div.payment-methods",
      ],
    },
  },
  extractPriceFromHTML: function (t) {
    var e = t.replace(/[^0-9.]/g, "");
    return Math.round(100 * parseFloat(e));
  },
  generateCurrencyHTML: function (t) {
    var e = Math.round(t, 2),
      a = afterpay_hide_range_decimals ? e.toFixed(0) : e.toFixed(2);
    return afterpay_show_currency_code
      ? "$" + a + "&nbsp;" + afterpay_shop_currency.toUpperCase()
      : "$" + a;
  },
  generateInsideLimitHTML: function (t) {
    return (
      t.data("outsidePaymentLimits") &&
        (t.removeData("outsidePaymentLimits"),
        Afterpay.supportedTheme
          ? t
              .find(".afterpay-text1")
              .html(" only pay ")
          : t
              .find(".afterpay-text1")
              .html("Only pay "),
        t.find(".afterpay-logo").insertAfter(t.find(".afterpay-instalments")),
        t
          .find(".afterpay-text2")
          .html(" by ")
          .insertBefore(t.find(".afterpay-logo")),
        t
          .find(".afterpay-link-inner")
          .html(afterpay_modal_open_icon ? "â“˜" : "More info")),
      t
    );
  },
  generateInstalmentHTML: function (t) {
    var e = (Math.round(t*0.7) / 100).toFixed(2);
    return afterpay_show_currency_code
      ? "$" + e + "&nbsp;" + afterpay_shop_currency.toUpperCase()
      : "$" + e;
  },
  generateOutsideLimitHTML: function (t) {
    return (
      t.data("outsidePaymentLimits", !0),
      Afterpay.versionCompare(afterpay_js_snippet_version, "1.0.2", ">=")
        ? t.find(".afterpay-text1").html("")
        : t.find(".afterpay-text1").html("Invite friends for instant cashback"),
      t.find(".afterpay-logo").insertAfter(t.find(".afterpay-text1")),
      afterpay_hide_upper_limit && !afterpay_hide_lower_limit
        ? (t.find(".afterpay-text2").html(" available for all orders"),
          t
            .find(".afterpay-instalments")
            .html(Afterpay.generateCurrencyHTML(afterpay_min))
            .insertAfter(t.find(".afterpay-text2")))
        : !afterpay_hide_upper_limit && afterpay_hide_lower_limit
        ? (t.find(".afterpay-text2").html(" available for all orders "),
          t
            .find(".afterpay-instalments")
            .html(Afterpay.generateCurrencyHTML(afterpay_max))
            .insertAfter(t.find(".afterpay-text2")))
        : ((!afterpay_hide_upper_limit && !afterpay_hide_lower_limit) ||
            (afterpay_hide_upper_limit && afterpay_hide_lower_limit)) &&
          (t.find(".afterpay-text2").html(" available between "),
          t
            .find(".afterpay-instalments")
            .html(
              Afterpay.generateCurrencyHTML(afterpay_min) +
                " - " +
                Afterpay.generateCurrencyHTML(afterpay_max)
            )
            .insertAfter(t.find(".afterpay-text2"))),
      t
        .find(".afterpay-link-inner")
        .html(afterpay_modal_open_icon ? "â“˜" : "More info"),
      t
    );
  },
  init: function (c) {
    (Afterpay.supportedTheme =
      Afterpay.supportedThemes[afterpay_theme_name.toLowerCase()]),
      (Afterpay.mutationObserver =
        window.MutationObserver || window.WebKitMutationObserver),
      /^\/cart/i.test(window.location.pathname)
        ? 0 != afterpay_cart_integration_enabled &&
          Afterpay.initStaticCartPage(c)
        : /^\/(collections|products)/i.test(window.location.pathname) &&
          afterpay_product &&
          afterpay_product_integration_enabled &&
          Afterpay.initProductPage(c),
      Afterpay.initFooterLogo(c),
      0 != afterpay_cart_dynamic_integration_enabled &&
        Afterpay.supportedTheme &&
        Afterpay.supportedTheme.hasOwnProperty("cart") &&
        Afterpay.supportedTheme.cart.hasOwnProperty("dynamic_content") &&
        c.each(Afterpay.supportedTheme.cart.dynamic_content, function (t, p) {
          p.hasOwnProperty("target_selector") &&
            p.hasOwnProperty("addedNode_selector") &&
            p.hasOwnProperty("subtotal_selector") &&
            (Afterpay.mutationObserver &&
              new Afterpay.mutationObserver(function (t, e) {
                var a, r;
                for (a = 0; a < t.length; a++)
                  if (c(t[a].target).is(p.target_selector))
                    for (r = 0; r < t[a].addedNodes.length; r++)
                      if (
                        "object" == typeof t[a].addedNodes[r] &&
                        c(t[a].addedNodes[r]).is(p.addedNode_selector)
                      ) {
                        var o = Afterpay.renderParagraph(c, {
                          total_price: afterpay_cart_total_price,
                          page_name: "dynamic_cart",
                        });
                        "USD" != afterpay_shop_currency &&
                          (o.find(".afterpay-text1").html("only pay "),
                          o.find(".afterpay-text2").html(" with ")),
                          (afterpay_cart_total_price < 100 * afterpay_min ||
                            afterpay_cart_total_price > 100 * afterpay_max) &&
                            ("USD" == afterpay_shop_currency
                              ? (o = Afterpay.generateOutsideLimitHTML(o))
                              : o.hide()),
                          "undefined" != typeof afterpay_cart_dynamic_css &&
                            o.css(afterpay_cart_dynamic_css),
                          c(p.target_selector)
                            .find(p.addedNode_selector)
                            .find(p.subtotal_selector)
                            .after(o),
                          p.paragraph_css && o.css(p.paragraph_css),
                          ($logo_element = o.find(".afterpay-logo")),
                          0 < $logo_element.length &&
                            p.logo_css &&
                            $logo_element.css(p.logo_css),
                          "function" == typeof p.after_render &&
                            p.after_render(c, o);
                      }
              }).observe(document, {
                childList: !0,
                attributes: !1,
                characterData: !1,
                subtree: !0,
                attributeOldValue: !1,
                characterDataOldValue: !1,
              }),
            jQuery(document).ajaxComplete(function (t, e, a) {
              "GET" == a.type &&
                "/cart.js" == a.url &&
                200 == e.status &&
                (afterpay_cart_total_price = e.responseJSON.total_price);
            }));
        });
  },
  initFooterLogo: function (r) {
    if (
      "boolean" == typeof afterpay_footer_logo_enabled &&
      afterpay_footer_logo_enabled
    ) {
      var a,
        o = null,
        p = null,
        e = null;
      if (
        ("string" == typeof afterpay_footer_logo_container
          ? (o = r(afterpay_footer_logo_container))
          : Afterpay.supportedTheme &&
            Afterpay.supportedTheme.hasOwnProperty("footer")
          ? r.each(Afterpay.supportedTheme.footer, function (t, e) {
              if (0 < (o = r(e.logo_container)).length) return !1;
            })
          : (r.each(Afterpay.supportedThemes, function (a, t) {
              if (
                new RegExp(a, "i").test(afterpay_theme_name) &&
                t.hasOwnProperty("footer") &&
                (r.each(t.footer, function (t, e) {
                  if (0 < (o = r(e.logo_container)).length)
                    return (
                      (Afterpay.supportedTheme = Afterpay.supportedThemes[a]),
                      !1
                    );
                }),
                "object" == typeof Afterpay.supportedTheme &&
                  null !== Afterpay.supportedTheme)
              )
                return !1;
            }),
            (Afterpay.supportedTheme && !0 !== Afterpay.supportedTheme) ||
              r.each(Afterpay.commonElements.footer.logo_container, function (
                t,
                e
              ) {
                if (0 < (o = r(e)).length) return !1;
              })),
        0 != o.length && 0 != o.children().length)
      ) {
        if (
          ["icon", "stacked", "logo"].includes(afterpay_footer_logo_format) &&
          ["colour", "color", "black", "white"].includes(
            afterpay_footer_logo_theme
          ) &&
          ["border", "transparent"].includes(afterpay_footer_logo_background)
        ) {
          if (
            ("logo" == afterpay_footer_logo_format &&
              (afterpay_footer_logo_background = "transparent"),
            (a =
              logo_asset),
            "string" == typeof afterpay_footer_logo_template)
          )
            p = r(afterpay_footer_logo_template.replace("{logo_path}", a));
          else if (
            Afterpay.supportedTheme &&
            Afterpay.supportedTheme.hasOwnProperty("footer")
          )
            r.each(Afterpay.supportedTheme.footer, function (t, e) {
              p = r(e.logo_template.replace("{logo_path}", a));
            });
          else if ((p = o.children().first().clone()).is("svg") || p.is("img"))
            (e = p.attr("class")),
              (p = p.is("svg")
                ? r(
                    '<object class="' +
                      e +
                      '" data="' +
                      a +
                      '" type="image/svg+xml"></object>'
                  )
                : r(
                    '<img class="' + e + '" src="' + a + '" alt="m8buy" />'
                  ));
          else if (p.find("svg").length)
            (e = p.find("svg").attr("class")),
              p
                .find("svg")
                .replaceWith(
                  '<object class="' +
                    e +
                    '" data="' +
                    a +
                    '" type="image/svg+xml"></object>'
                );
          else {
            if (!p.find("img").length) return;
            (e = p.find("img").attr("class")),
              p
                .find("img")
                .replaceWith(
                  '<img class="' + e + '" src="' + a + '" alt="m8buy" />'
                );
          }
          p.is("object") || p.find("object").length
            ? ((e = p.is("object")
                ? p.attr("class")
                : p.find("object").attr("class")),
              r.get(a + "?co=1", function (t) {
                p.is("object")
                  ? ((p = r(t.documentElement)).addClass(e),
                    "object" == typeof afterpay_footer_logo_css &&
                      p.css(afterpay_footer_logo_css))
                  : (p.find("object").replaceWith(t.documentElement),
                    p.find("svg").addClass(e),
                    "object" == typeof afterpay_footer_logo_css &&
                      p.find("svg").css(afterpay_footer_logo_css)),
                  o.append(p);
              }))
            : p.is("img")
            ? ("object" == typeof afterpay_footer_logo_css &&
                p.css(afterpay_footer_logo_css),
              o.append(p))
            : p.find("img").length &&
              ("object" == typeof afterpay_footer_logo_css &&
                p.find("img").css(afterpay_footer_logo_css),
              o.append(p));
        }
      }
    }
  },
  initProductPage: function (o) {
    var p,
      r = null,
      c = null,
      n = null,
      t = "after";
    if (
      ((p = Afterpay.renderParagraph(o, {
        total_price: afterpay_current_variant.price,
        page_name: "product",
      })),
      "undefined" != typeof afterpay_product_selector
        ? ((Afterpay.supportedTheme = !0),
          0 < (r = o(afterpay_product_selector)).length && (c = r.first()))
        : (Afterpay.supportedTheme
            ? o.each(Afterpay.supportedTheme.product, function (t, e) {
                if (0 < (r = o(e.selector)).length)
                  return (
                    (c = r.first()),
                    e.paragraph_css && p.css(e.paragraph_css),
                    ($logo_element = p.find(".afterpay-logo")),
                    0 < $logo_element.length &&
                      e.logo_css &&
                      $logo_element.css(e.logo_css),
                    !1
                  );
              })
            : ((r = null),
              o.each(Afterpay.supportedThemes, function (a, t) {
                if (
                  new RegExp(a, "i").test(afterpay_theme_name) &&
                  (o.each(Afterpay.supportedThemes[a].product, function (t, e) {
                    if (0 < (r = o(e.selector)).length)
                      return (
                        (Afterpay.supportedTheme = Afterpay.supportedThemes[a]),
                        (c = r.first()),
                        e.paragraph_css && p.css(e.paragraph_css),
                        ($logo_element = p.find(".afterpay-logo")),
                        0 < $logo_element.length &&
                          e.logo_css &&
                          $logo_element.css(e.logo_css),
                        !1
                      );
                  }),
                  null !== c)
                )
                  return !1;
              })),
          null === c &&
            o.each(Afterpay.commonElements.product.price_selector, function (
              t,
              e
            ) {
              if (0 < (r = o(e)).length)
                return (Afterpay.supportedTheme = !0), (c = r.first()), !1;
            }),
          null === c &&
            0 < (r = o('form[action^="/cart/add"]')).length &&
            ((c = r.first()),
            (t = "before"),
            "USD" == afterpay_shop_currency
              ? p
                  .find(".afterpay-text1")
                  .html("Only pay")
              : p
                  .find(".afterpay-text1")
                  .html("Only pay "))),
      null !== c)
    ) {
      if (
        (afterpay_current_variant.available
          ? (afterpay_current_variant.price < 100 * afterpay_min ||
              afterpay_current_variant.price > 100 * afterpay_max) &&
            ("USD" == afterpay_shop_currency
              ? (p = Afterpay.generateOutsideLimitHTML(p))
              : p.hide())
          : p.hide(),
        Afterpay.versionCompare(afterpay_js_snippet_version, "1.0.6", ">=") &&
          "after" == t)
      ) {
        var e = c.css("margin-bottom");
        "-" == e.charAt(0)
          ? p.css("margin-top", e.slice(1))
          : p.css("margin-top", "-" + e),
          p.css("margin-bottom", e);
      }
      "undefined" != typeof afterpay_product_css && p.css(afterpay_product_css),
        c[t](p);
    }
    0 != afterpay_variable_price_fallback
      ? ("undefined" != typeof afterpay_variable_price_fallback_selector &&
          0 < (r = o(afterpay_variable_price_fallback_selector)).length &&
          (n = r.first()),
        null === n && null !== c && (n = c),
        null !== n &&
          (Afterpay.mutationObserver &&
          "mutation" == afterpay_variable_price_fallback_method
            ? (Afterpay.updateParagraph(
                p,
                Afterpay.extractPriceFromHTML(n.text())
              ),
              new Afterpay.mutationObserver(function (t, e) {
                var a;
                for (
                  n = o(afterpay_variable_price_fallback_selector).first(),
                    a = 0;
                  a < t.length;
                  a++
                )
                  o(t[a].target).is(n) &&
                    Afterpay.updateParagraph(
                      p,
                      Afterpay.extractPriceFromHTML(t[a].target.innerHTML)
                    );
              }).observe(document.body, {
                childList: !0,
                attributes: !1,
                characterData: !1,
                subtree: !0,
                attributeOldValue: !1,
                characterDataOldValue: !1,
              }))
            : setInterval(function (t) {
                (n = o(afterpay_variable_price_fallback_selector).first()),
                  Afterpay.updateParagraph(
                    p,
                    Afterpay.extractPriceFromHTML(n.text())
                  );
              }, 400)))
      : o("body").on("change", o('form[action^="/cart/add"]'), function (t) {
          var e = o(t.target).closest("form"),
            a = parseInt(
              o(
                "input[name=id]:checked, select[name=id], input[name=id], hidden[name=id]",
                e
              ).val(),
              10
            ),
            r = !1;
          !isNaN(a) &&
            0 < a &&
            o.each(afterpay_product.variants, function (t, e) {
              e.id == a &&
                e.available &&
                (e.price >= 100 * afterpay_min && e.price <= 100 * afterpay_max
                  ? ((r = !0),
                    "USD" == afterpay_shop_currency &&
                      (p = Afterpay.generateInsideLimitHTML(p)),
                    p
                      .find(".afterpay-instalments")
                      .html(Afterpay.generateInstalmentHTML(e.price)))
                  : "USD" == afterpay_shop_currency &&
                    ((r = !0), (p = Afterpay.generateOutsideLimitHTML(p))));
            }),
            e.find("input[type=submit],button[type=submit]").is("[disabled]") &&
              (r = !1),
            null !== p && (r ? p.show() : p.hide());
        });
  },
  initStaticCartPage: function (r) {
    var o,
      p = null,
      c = null,
      n = null,
      t = "after";
    (o = Afterpay.renderParagraph(r, {
      total_price: afterpay_cart_total_price,
      page_name: "static_cart",
    })),
      "undefined" != typeof afterpay_cart_static_selector
        ? ((Afterpay.supportedTheme = !0),
          0 < (p = r(afterpay_cart_static_selector)).length &&
            ((c = p.first()),
            "USD" != afterpay_shop_currency &&
              (o.find(".afterpay-text1").html("only pay "),
              o.find(".afterpay-text2").html(" with "))))
        : (Afterpay.supportedTheme
            ? r.each(Afterpay.supportedTheme.cart.static_page, function (t, e) {
                if (
                  ((p = r(e.selector)),
                  e.paragraph_css && o.css(e.paragraph_css),
                  0 < p.length)
                )
                  return (
                    (c = p.first()),
                    "USD" != afterpay_shop_currency &&
                      (o.find(".afterpay-text1").html("only pay "),
                      o.find(".afterpay-text2").html(" with ")),
                    ($logo_element = o.find(".afterpay-logo")),
                    0 < $logo_element.length &&
                      e.logo_css &&
                      $logo_element.css(e.logo_css),
                    !1
                  );
              })
            : ((p = null),
              r.each(Afterpay.supportedThemes, function (a, t) {
                if (
                  new RegExp(a, "i").test(afterpay_theme_name) &&
                  (r.each(
                    Afterpay.supportedThemes[a].cart.static_page,
                    function (t, e) {
                      if (
                        ((p = r(e.selector)),
                        e.paragraph_css && o.css(e.paragraph_css),
                        0 < p.length)
                      )
                        return (
                          (Afterpay.supportedTheme =
                            Afterpay.supportedThemes[a]),
                          (c = p.first()),
                          "USD" != afterpay_shop_currency &&
                            (o
                              .find(".afterpay-text1")
                              .html(" only pay "),
                            o.find(".afterpay-text2").html(" with ")),
                          ($logo_element = o.find(".afterpay-logo")),
                          0 < $logo_element.length &&
                            e.logo_css &&
                            $logo_element.css(e.logo_css),
                          !1
                        );
                    }
                  ),
                  null !== c)
                )
                  return !1;
              })),
          null === c &&
            r.each(
              Afterpay.commonElements.cart.static_page.subtotal_selector,
              function (t, e) {
                if (0 < (p = r(e)).length)
                  return (
                    (Afterpay.supportedTheme = !0),
                    (c = p.first()),
                    "USD" != afterpay_shop_currency &&
                      (o.find(".afterpay-text1").html(" only pay "),
                      o.find(".afterpay-text2").html(" with ")),
                    !1
                  );
              }
            ),
          null === c &&
            (o.css({ "text-align": "right" }),
            "USD" == afterpay_shop_currency
              ? o
                  .find(".afterpay-text1")
                  .html("Invite a friend to get a discount ")
              : o.find(".afterpay-text1").html("Get a discount of "),
            0 < (p = r('a[href="collections/all"],input[name=update]')).length
              ? ((c = p.first()), (t = "before"))
              : 0 <
                  (p = r(
                    'form[action^="/cart"]:not(form[action^="/cart/add"])'
                  )).length && (c = p.first()))),
      null !== c &&
        ((afterpay_cart_total_price < 100 * afterpay_min ||
          afterpay_cart_total_price > 100 * afterpay_max) &&
          ("USD" == afterpay_shop_currency
            ? (o = Afterpay.generateOutsideLimitHTML(o))
            : o.hide()),
        "undefined" != typeof afterpay_cart_static_css &&
          o.css(afterpay_cart_static_css),
        c[t](o)),
      0 != afterpay_variable_subtotal_fallback &&
        ("undefined" != typeof afterpay_variable_subtotal_fallback_selector &&
          0 < (p = r(afterpay_variable_subtotal_fallback_selector)).length &&
          (n = p.first()),
        null === n && null !== c && (n = c),
        null !== n &&
          (Afterpay.mutationObserver &&
          "mutation" == afterpay_variable_subtotal_fallback_method
            ? (Afterpay.updateParagraph(
                o,
                Afterpay.extractPriceFromHTML(n.text())
              ),
              new Afterpay.mutationObserver(function (t, e) {
                var a;
                for (
                  n = r(afterpay_variable_subtotal_fallback_selector).first(),
                    a = 0;
                  a < t.length;
                  a++
                )
                  r(t[a].target).is(n) &&
                    Afterpay.updateParagraph(
                      o,
                      Afterpay.extractPriceFromHTML(t[a].target.innerHTML)
                    );
              }).observe(n.get(0), {
                childList: !0,
                attributes: !1,
                characterData: !1,
                subtree: !0,
                attributeOldValue: !1,
                characterDataOldValue: !1,
              }))
            : setInterval(function (t) {
                (n = r(afterpay_variable_subtotal_fallback_selector).first()),
                  Afterpay.updateParagraph(
                    o,
                    Afterpay.extractPriceFromHTML(n.text())
                  );
              }, 400)));
  },
  launchPopup: function (a, r) {
    var t, e, o, p, c;
    if (
      (r.preventDefault(),
      afterpay_modal_responsive && "USD" == afterpay_shop_currency)
    )
      if (a("#afterpay-modal-container").length)
        a("body").addClass("afterpay-modal-open"),
          a("#afterpay-modal-modal").scrollTop(0);
      else {
        var n = a(document.createElement("link"));
        n
          .attr("rel", "stylesheet")
          .attr("type", "text/css")
          .attr("href", "https://static.afterpay.com/modal/us.css")
          .appendTo("head"),
          a.ajax({
            url: "https://static.afterpay.com/modal/us.html",
            complete: function (t, e) {
              200 == t.status
                ? (a("body")
                    .addClass("afterpay-modal-open")
                    .append(t.responseText),
                  a("#afterpay-afterpay-modal-close").on("click", function (t) {
                    t.preventDefault(),
                      a("body").removeClass("afterpay-modal-open");
                  }))
                : (n.remove(),
                  (afterpay_modal_responsive = !1),
                  Afterpay.launchPopup(a, r));
            },
          });
      }
    else
      0 < (t = a("#afterpay-popup-wrapper")).length
        ? t.show()
        : ((t = a(document.createElement("div"))
            .attr("id", "afterpay-popup-wrapper")
            .css({
              position: "fixed",
              "z-index": 9999999999,
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              overflow: "auto",
            })
            .appendTo("body")
            .on("click", function (t) {
              Afterpay.closePopup(a, t);
            })),
          (e = a(document.createElement("div"))
            .attr("id", "afterpay-popup-outer")
            .css({
              display: "flex",
              "-webkit-justify-content": "center",
              "-ms-flex-pack": "center",
              "justify-content": "center",
              "-webkit-align-content": "center",
              "-ms-flex-line-pack": "center",
              "align-content": "center",
              "-webkit-align-items": "center",
              "-ms-flex-align": "center",
              "align-items": "center",
              width: "100%",
              "min-height": "100%",
              "background-color": "rgba(0, 0, 0, 0.80)",
            })
            .appendTo(t)),
          (o = a(document.createElement("div"))
            .attr("id", "afterpay-popup-inner")
            .css({ position: "relative", "background-color": "#fff" })
            .appendTo(e)),
          (p = a(document.createElement("a"))),
          "USD" == afterpay_shop_currency
            ? p.attr(
                "href",
                "https://m8buy.co/terms-and-conditions/t"
              )
            : p.attr("href", "https://m8buy.co/terms-and-conditions/"),
          p.attr("target", "_blank").css({ display: "block" }).appendTo(o),
          (c = a(document.createElement("img"))),
          "USD" == afterpay_shop_currency
            ? 640 < a(window).width()
              ? c
                  .attr(
                    "src",
                    "https://demo.widget.m8buy.co/general/14fde23d3af24d52390271b743c34119.svg"
                  )
                  .attr(
                    "srcset",
                    "https://demo.widget.m8buy.co/general/14fde23d3af24d52390271b743c34119.svg"
                  )
                  .css({ "max-width": "597px" })
              : c
                  .attr("src", "https://demo.widget.m8buy.co/general/14fde23d3af24d52390271b743c34119.svg")
                  .attr(
                    "srcset",
                    "https://demo.widget.m8buy.co/general/14fde23d3af24d52390271b743c34119.svg"
                  )
                  .css({ "max-width": "299px" })
            : afterpay_cbt_enabled
            ? 640 < a(window).width()
              ? c
                  .attr(
                    "src",
                    "https://demo.widget.m8buy.co/general/14fde23d3af24d52390271b743c34119.svg"
                  )
                  .attr(
                    "srcset",
                    "https://static.afterpay.com/lightbox-desktop-cbt.png 1x, https://static.afterpay.com/lightbox-desktop-cbt@2x.png 2x, https://static.afterpay.com/lightbox-desktop-cbt@3x.png 3x"
                  )
                  .css({ "max-width": "597px" })
              : c
                  .attr(
                    "src",
                    "https://demo.widget.m8buy.co/general/14fde23d3af24d52390271b743c34119.svg"
                  )
                  .attr(
                    "srcset",
                    "https://static.afterpay.com/lightbox-mobile-cbt.png 1x, https://static.afterpay.com/lightbox-mobile-cbt@2x.png 2x, https://static.afterpay.com/lightbox-mobile-cbt@3x.png 3x"
                  )
                  .css({ "max-width": "300px" })
            : 640 < a(window).width()
            ? c.attr("src", "https://demo.widget.m8buy.co/general/14fde23d3af24d52390271b743c34119.svg")
            : c.attr("src", "https://demo.widget.m8buy.co/general/14fde23d3af24d52390271b743c34119.svg"),
          c
            .css({ display: "block", width: "100%" })
            .appendTo(p)
            .on("click", function (t) {
              t.stopPropagation();
            }),
          a(document.createElement("a"))
            .attr("href", "#")
            .css({ position: "absolute", right: "8px", top: "8px" })
            .html(
              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" width="32px" height="32px"><g id="surface1"><path style=" " d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 12.21875 10.78125 L 10.78125 12.21875 L 14.5625 16 L 10.78125 19.78125 L 12.21875 21.21875 L 16 17.4375 L 19.78125 21.21875 L 21.21875 19.78125 L 17.4375 16 L 21.21875 12.21875 L 19.78125 10.78125 L 16 14.5625 Z "/></g></svg>'
            )
            .appendTo(o)
            .on("click", function (t) {
              Afterpay.closePopup(a, t);
            }));
  },
  loadScript: function (t, e) {
    var a = document.createElement("script");
    (a.type = "text/javascript"),
      a.readyState
        ? (a.onreadystatechange = function () {
            ("loaded" != a.readyState && "complete" != a.readyState) ||
              ((a.onreadystatechange = null), e());
          })
        : (a.onload = function () {
            e();
          }),
      (a.src = t),
      document.getElementsByTagName("head")[0].appendChild(a);
  },
  renderParagraph: function (e, t) {
    var a = e(document.createElement("p")).addClass("afterpay-paragraph");
    null !== afterpay_product && a.attr("data-product-id", afterpay_product.id);
    var r = e(document.createElement("span"))
      .addClass("afterpay-text1")
      .appendTo(a);
    "USD" == afterpay_shop_currency
      ? r.html("or invite a friend using m8buy and only pay ")
      : r.html("or invite a friend using m8buy and only pay ");
    e(document.createElement("strong"))
      .addClass("afterpay-instalments")
      .html(Afterpay.generateInstalmentHTML(t.total_price))
      .appendTo(a);
    var o = e(document.createElement("span"))
      .addClass("afterpay-text2")
      .appendTo(a);
    "USD" == afterpay_shop_currency
      ? o.html(" by ")
      : o.html("with ");
    var p = afterpay_logo_theme;
    "product" == t.page_name &&
    "undefined" != typeof afterpay_product_logo_theme
      ? (p = afterpay_product_logo_theme)
      : "static_cart" == t.page_name &&
        "undefined" != typeof afterpay_cart_static_logo_theme
      ? (p = afterpay_cart_static_logo_theme)
      : "dynamic_cart" == t.page_name &&
        "undefined" != typeof afterpay_cart_dynamic_logo_theme &&
        (p = afterpay_cart_dynamic_logo_theme);
    e(document.createElement("img"))
      .addClass("afterpay-logo")
      .css({ "vertical-align": "middle", width: "100px", border: "0px" })
      .attr(
        "src",
        "https://static.afterpay.com/integration/product-page/logo-afterpay-" +
          p +
          ".png"
      )
      .attr(
        "srcset",
        "https://ucarecdn.com/869a28dc-6eae-4a56-b8a1-b5d873bb9f59/-/crop/930x231/85,8/-/preview/"
      )
      .attr("width", "100")
      .attr("height", "21")
      .attr("alt", "Afterpay")
      .appendTo(a),
      e(document.createElement("span"))
        .addClass("afterpay-text3")
        .html("&nbsp;")
        .appendTo(a);
    var c = e(document.createElement("a")).addClass("afterpay-link");
    "USD" == afterpay_shop_currency
      ? c.attr("href", "https://m8buy.co/terms-and-conditions/")
      : c.attr("href", "https://m8buy.co/terms-and-conditions/"),
      c
        .attr("target", "_blank")
        .on("click", function (t) {
          Afterpay.launchPopup(e, t);
        })
        .appendTo(a);
    e(document.createElement("u"))
      .addClass("afterpay-link-inner")
      .css({ "font-size": "12px" })
      .html(afterpay_modal_open_icon ? "â“˜" : "More info")
      .css(
        afterpay_modal_open_icon
          ? { "text-decoration": "none" }
          : { "text-decoration": "underline" }
      )
      .appendTo(c);
    return a;
  },
  supportedCurrencies: ["AUD", "NZD", "USD"],
  supportedThemes: {
    alchemy: {
      product: { "2017-12-14": { selector: ".quadd-wrapper" } },
      footer: {
        "2020-02-07": {
          logo_container: "footer div.payment-methods__inner",
          logo_template:
            '<img class="payment-icon fade-in lazyloaded" alt="m8buy" src="{logo_path}">',
        },
      },
    },
    atlantic: {
      product: { "2017-12-14": { selector: "p.price" } },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-options",
          logo_template:
            '<li class="payment-icon"><object data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    blockshop: {
      product: {
        "2017-12-14": {
          selector: "article .prices",
          paragraph_css: { "margin-top": "-1em", "margin-bottom": "2em" },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-icons--list",
          logo_template:
            '<li class="payment-icons--item"><object data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    boundless: {
      product: {
        "2017-12-14": {
          selector: "#AddToCartForm-product-template .product__price",
          paragraph_css: { "margin-top": "0px" },
        },
      },
      cart: {
        static_page: { "2018-05-30": { selector: "span.cart__subtotal" } },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-icons",
          logo_template:
            '<li><object class="payment-icons__icon" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    brooklyn: {
      product: {
        "2017-12-14": {
          selector: "#ProductPrice",
          logo_css: { border: "0px" },
        },
      },
      cart: {
        static_page: {
          "2018-05-30": {
            selector: ".cart__row--table:last",
            logo_css: { border: "0px" },
          },
        },
        dynamic_content: {
          "2018-06-25": {
            target_selector: "#CartDrawer #CartContainer",
            addedNode_selector: "form.ajaxcart",
            subtotal_selector: ".ajaxcart__footer .grid--full",
            paragraph_css: { "text-align": "right" },
            logo_css: { border: "0px" },
            after_render: function (t, e) {
              var a = t("#CartContainer .ajaxcart__inner--has-fixed-footer"),
                r = t("#CartContainer .ajaxcart__footer--fixed"),
                o = r.outerHeight() + e.outerHeight(!0);
              a.css("bottom", o + "px"), r.css("height", o + "px");
            },
          },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-icons",
          logo_template:
            '<li><object class="icon" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    classic: {
      product: {
        "2017-12-14": {
          selector: ".product-single__prices",
          paragraph_css: { "margin-top": "-15px", "margin-bottom": "30px" },
        },
      },
    },
    debut: {
      product: {
        "2017-12-14": {
          selector: ".product-single__price",
          paragraph_css: { "margin-top": "-20px", "margin-bottom": "40px" },
        },
        "2018-07-04": {
          selector: ".product__price",
          paragraph_css: { "margin-top": "-10px", "margin-bottom": "40px" },
        },
      },
      cart: {
        static_page: {
          "2018-05-30": { selector: ".cart__footer .cart__subtotal" },
          "2020-03-27": { selector: ".cart-subtotal" },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-icons",
          logo_template:
            '<li class="payment-icon"><object class="icon icon--full-color" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    district: {
      product: {
        "2017-12-14": {
          selector: "#ComparePrice-product-template",
          paragraph_css: {
            "margin-top": "0.3rem",
            display: "block",
            "font-style": "normal",
          },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer .payment-types ul",
          logo_template:
            '<li><object class="payment-icon payment-icon--afterpay" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    empire: {
      product: {
        "2017-12-14": {
          selector: ".product--container .product-pricing",
          paragraph_css: {
            "line-height": "1.5",
            "margin-top": "10px",
            "margin-bottom": "22px",
          },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-icons",
          logo_template:
            '<li class="payment-icons-item"><object data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    fashionopolism: {
      product: {
        "2017-12-14": { selector: ".product-prices" },
        "2018-08-10": { selector: "#product-price" },
      },
      cart: { static_page: { "2018-08-10": { selector: "#basket-right>h4" } } },
      footer: {
        "2020-02-07": {
          logo_container: "footer .sub-footer .right-side",
          logo_template: '<img src="{logo_path}" />',
        },
      },
    },
    flow: {
      product: {
        "2017-12-14": {
          selector: "#ProductPrice",
          paragraph_css: { "margin-top": "-20px", "margin-bottom": "30px" },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-icons",
          logo_template:
            '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    grid: {
      product: {
        "2017-12-14": {
          selector: ".product-details .product-price",
          paragraph_css: { "margin-top": "-35px", "margin-bottom": "40px" },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer .site-footer-payment-types",
          logo_template:
            '<object data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    icon: {
      product: {
        "2017-12-14": {
          selector: "#product-price",
          paragraph_css: { "margin-top": "-20px" },
        },
      },
      cart: { static_page: { "2018-08-10": { selector: "#basket-right>h4" } } },
      footer: {
        "2020-02-07": {
          logo_container: "footer #payment",
          logo_template:
            '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    jumpstart: {
      product: {
        "2017-12-14": { selector: "#AddToCartForm .price:last" },
        "2018-05-30": { selector: "#ProductPrice-product-template" },
      },
      cart: {
        static_page: { "2018-05-30": { selector: "span.h3.cart__subtotal" } },
      },
    },
    minimal: {
      product: {
        "2017-12-14": {
          selector: ".product-single__prices",
          paragraph_css: { "margin-top": "-15px" },
        },
      },
      cart: {
        static_page: {
          "2018-05-30": { selector: ".h5.cart__subtotal" },
          "2020-02-26": { selector: ".cart__subtotal" },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-icons",
          logo_template:
            '<li><object class="icon" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    modular: {
      product: {
        "2017-12-14": {
          selector: ".productForm .product-price",
          paragraph_css: { "margin-top": "-1rem", "margin-bottom": "1.5rem" },
        },
        "2020-06-03": { selector: ".product-normal-price" },
        "2020-09-21": { selector: ".product-price" },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-icon-list",
          logo_template:
            '<li><object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    motion: {
      product: {
        "2017-12-14": {
          selector: ".product-single__meta .product__price:last",
        },
      },
      cart: {
        static_page: {
          "2018-05-30": {
            selector: ".grid--full.cart__row--table:last",
            paragraph_css: { "margin-top": "10px" },
          },
        },
      },
    },
    narrative: {
      product: {
        "2017-12-14": {
          selector: ".product__content .product__price",
          paragraph_css: { "margin-top": "0px", "text-align": "center" },
        },
      },
      cart: {
        static_page: {
          "2018-05-30": { selector: ".cart-footer .cart-footer__subtotal" },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-icons",
          logo_template:
            '<li class="payment-icon"><object class="icon icon--full-color" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    pacific: {
      product: { "2017-12-14": { selector: ".product-price" } },
      footer: {
        "2020-02-07": {
          logo_container: "footer .payment-options",
          logo_template:
            '<object data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    parallax: {
      product: { "2017-12-14": { selector: ".modal_price" } },
      cart: {
        static_page: {
          "2018-05-31": {
            selector: "form .subtotal_amount",
            paragraph_css: { "font-size": "13px" },
          },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: ".footer .payment_methods",
          logo_template:
            '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    pipeline: {
      product: {
        "2017-12-14": {
          selector: "#ComparePriceWrapper-product",
          paragraph_css: {
            "margin-top": "15px",
            "line-height": "1.5",
            "letter-spacing": "0",
            "font-size": "14px",
            "text-transform": "none",
            color: "#000",
          },
        },
        "2018-08-10": { selector: "#productInfo-product .product__price" },
      },
      cart: {
        static_page: {
          "2018-08-10": { selector: ".cart__footer__text:first" },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-icons",
          logo_template:
            '<li><object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object><span class="visually-hidden">Afterpay</span></li>',
        },
      },
    },
    pop: {
      product: { "2017-12-14": { selector: ".product-single__price" } },
      cart: {
        static_page: { "2018-05-30": { selector: "span.cart__subtotal" } },
      },
    },
    prestige: {
      product: {
        "2018-07-27": { selector: ".ProductMeta__PriceList.Heading" },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.Footer__PaymentList",
          logo_template:
            '<li class="HorizontalList__Item"><object data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    providence: {
      product: { "2017-12-14": { selector: ".pricing" } },
      footer: {
        "2020-02-07": {
          logo_container: "footer .payment-types",
          logo_template:
            '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    retina: {
      product: {
        "2017-12-14": {
          selector: ".modal_price",
          paragraph_css: { "margin-top": "-15px", "margin-bottom": "20px" },
        },
      },
      cart: {
        static_page: {
          "2018-08-10": {
            selector: "#cart_form .subtotal_amount",
            paragraph_css: { "font-size": "13px" },
          },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: ".footer .payment_methods",
          logo_template:
            '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    showcase: {
      product: {
        "2018-08-10": {
          selector: ".product-detail__title-and-price .price-area",
        },
      },
      cart: {
        static_page: { "2018-08-10": { selector: "#cartform .subtotal" } },
      },
      footer: {
        "2020-02-07": {
          logo_container: ".page-footer ul.payment-methods",
          logo_template:
            '<li><object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    showtime: {
      product: {
        "2017-12-14": {
          selector: ".desc_blk_bot .price",
          paragraph_css: {
            float: "none",
            clear: "both",
            "margin-bottom": "1rem",
            "text-align": "center",
          },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: "#footer .partner ul.list-inline",
          logo_template:
            '<li><object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    simple: {
      product: {
        "2017-12-14": {
          selector: "#ProductSection .product-single__prices",
          paragraph_css: { "margin-top": "-15px", "margin-bottom": "30px" },
        },
      },
      cart: {
        static_page: { "2018-05-30": { selector: "span.cart__subtotal.h3" } },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-icons",
          logo_template:
            '<li><object class="icon icon--full-color" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    supply: {
      product: { "2017-12-14": { selector: "ul.product-meta" } },
      cart: {
        static_page: { "2018-05-30": { selector: ".h1.cart-subtotal--price" } },
        dynamic_content: {
          "2018-05-30": {
            target_selector: "#ajaxifyCart.ajaxifyCart--content",
            addedNode_selector: "form.cart-form",
            subtotal_selector: ".h1.cart-subtotal--price",
          },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-icons",
          logo_template:
            '<li><object class="icon" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    symmetry: {
      product: {
        "2017-12-14": { selector: "#main-product-detail .price-area" },
      },
      footer: {
        "2020-02-07": {
          logo_container: "#pagefooter .payment-methods",
          logo_template:
            '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    testament: {
      product: { "2017-12-14": { selector: "#product-price" } },
      cart: { static_page: { "2018-08-10": { selector: "#basket-right>h4" } } },
      footer: {
        "2020-06-03": {
          logo_container: "footer #payment",
          logo_template:
            '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    turbo: {
      product: { "2018-08-10": { selector: ".modal_price" } },
      cart: {
        static_page: {
          "2018-08-10": { selector: "#cart_form .cart_subtotal" },
        },
      },
      footer: {
        "2020-06-03": {
          logo_container: ".payment_methods",
          logo_template:
            '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    venture: {
      product: {
        "2017-12-14": {
          selector: "ul.product-single__meta-list",
          paragraph_css: { "margin-top": "10px" },
        },
      },
      cart: { static_page: { "2018-05-30": { selector: "p#CartSubtotal" } } },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.payment-icons",
          logo_template:
            '<li><object class="icon icon--full-color" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    venue: {
      product: {
        "2017-12-14": {
          selector: "h3.product-single__price-text",
          paragraph_css: { "line-height": "1.5" },
        },
      },
      footer: {
        "2020-02-07": {
          logo_container: "footer ul.footer__icons-items",
          logo_template:
            '<li class="footer__icons-item"><object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    responsive: {
      product: {
        "2020-03-05": {
          selector: ".product_section p.modal_price",
          paragraph_css: { "margin-top": "-10px", "margin-bottom": "10px" },
        },
      },
      cart: {
        static_page: {
          "2020-03-05": { selector: "#cart_form > .columns.omega > h4" },
        },
      },
      footer: {
        "2020-03-05": {
          logo_container: "footer div.payment_methods",
          logo_template:
            '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    canopy: {
      product: { "2020-03-10": { selector: "#price" } },
      cart: {
        static_page: {
          "2020-03-10": { selector: "#cartform div.cart-subtotal" },
        },
      },
      footer: {
        "2020-03-10": {
          logo_container: "footer div.payment-methods",
          logo_template:
            '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    sunrise: {
      product: {
        "2020-03-26": {
          selector: ".product-details .product-price-wrap",
          paragraph_css: { "font-size": "16px" },
        },
      },
      footer: {
        "2020-03-26": {
          logo_container: "footer .payment-icons",
          logo_template:
            '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    impulse: {
      product: { "2020-04-06": { selector: ".product__price-savings" } },
      footer: {
        "2020-04-06": {
          logo_container: "footer ul.payment-icons",
          logo_template:
            '<li class="icon--payment"><object class="icon icon--full-color" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    ella: {
      product: { "2020-06-03": { selector: ".prices" } },
      cart: {
        static_page: {
          "2020-06-03": {
            selector: ".total",
            paragraph_css: { "text-align": "center", "margin-bottom": "15px" },
          },
        },
      },
    },
    kingdom: {
      product: {
        "2020-06-03": { selector: ".product__price--original" },
        "2020-09-21": { selector: ".product__price--compare" },
      },
      cart: {
        static_page: {
          "2020-06-03": {
            selector: "#CartTotal",
            paragraph_css: { margin: "-5px 0 3px" },
          },
        },
      },
    },
    caros: {
      product: { "2020-06-03": { selector: ".total-price" } },
      cart: {
        static_page: {
          "2020-06-03": {
            selector: ".total",
            paragraph_css: { "text-align": "center" },
          },
        },
      },
    },
    furnitica: {
      product: { "2020-06-03": { selector: ".prices" } },
      cart: { static_page: { "2020-06-03": { selector: ".total-price" } } },
    },
    maker: {
      footer: {
        "2020-06-03": {
          logo_container: ".payment-icons--list",
          logo_template:
            '<li class="payment-icons--item"><object class="" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    molla: {
      product: {
        "2020-06-03": {
          selector: ".gf_product-prices",
          paragraph_css: { "margin-bottom": "20px" },
        },
      },
      cart: {
        static_page: {
          "2020-06-03": {
            selector: ".table-summary",
            paragraph_css: { "text-align": "center" },
          },
        },
      },
    },
    vantage: {
      cart: {
        static_page: { "2020-06-03": { selector: "#basket-right > h4" } },
      },
      footer: {
        "2020-06-03": {
          logo_container: ".payment-methods",
          logo_template:
            '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    debutify: {
      product: { "2020-09-17": { selector: ".price-wrapper" } },
      cart: {
        static_page: {
          "2020-09-17": {
            selector: ".cart__row--table:last",
            paragraph_css: { "text-align": "center" },
          },
        },
      },
      footer: {
        "2020-09-17": {
          logo_container: ".payment-icons-list",
          logo_template:
            '<li><object class="payment-icons" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    envy: {
      product: { "2020-09-17": { selector: ".product-page--pricing" } },
      cart: {
        static_page: {
          "2020-09-17": {
            selector: ".cart-totals--wrapper",
            paragraph_css: { "text-align": "right" },
          },
        },
      },
      footer: {
        "2020-09-17": {
          logo_container: "#footer-payment-methods",
          logo_template:
            '<object class="payment-icon" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    vanisa: {
      product: {
        "2020-09-21": {
          selector: ".product-price",
          paragraph_css: { "margin-top": "-5px", "margin-bottom": "15px" },
        },
      },
      cart: { static_page: { "2020-09-21": { selector: ".total-checkout" } } },
    },
    streamline: {
      product: { "2020-09-21": { selector: ".product-single__prices" } },
      footer: {
        "2020-09-21": {
          logo_container: ".payment-icons",
          logo_template:
            '<li class="icon--payment"><object class="icon icon--full-color" data="{logo_path}" type="image/svg+xml"></object></li>',
        },
      },
    },
    editions: {
      product: {
        "2020-09-21": { selector: ".product-details__price-container" },
      },
      footer: {
        "2020-09-21": {
          logo_container: ".payment-options",
          logo_template:
            '<object class="payment-icons" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
    warehouse: {
      product: { "2020-09-21": { selector: ".product-form .price-list" } },
      cart: {
        static_page: { "2020-09-21": { selector: ".cart-recap__price-line" } },
      },
      footer: {
        "2020-09-21": {
          logo_container: ".payment-list",
          logo_template:
            '<object class="payment-list__item" data="{logo_path}" type="image/svg+xml"></object>',
        },
      },
    },
  },
  updateParagraph: function (t, e) {
    100 * afterpay_min <= e && e <= 100 * afterpay_max
      ? (t.show(),
        "USD" == afterpay_shop_currency &&
          (t = Afterpay.generateInsideLimitHTML(t)),
        t
          .find(".afterpay-instalments")
          .html(Afterpay.generateInstalmentHTML(e)))
      : "USD" == afterpay_shop_currency
      ? (t.show(), (t = Afterpay.generateOutsideLimitHTML(t)))
      : t.hide();
  },
};
Afterpay.versionCompare = function (t, e, a) {
  function r(t) {
    return (t = (t = ("" + t).replace(/[_\-+]/g, "."))
      .replace(/([^.\d]+)/g, ".$1.")
      .replace(/\.{2,}/g, ".")).length
      ? t.split(".")
      : [-8];
  }
  function o(t) {
    return t ? (isNaN(t) ? i[t] || -7 : parseInt(t, 10)) : 0;
  }
  var p,
    c,
    n = 0,
    i = {
      dev: -6,
      alpha: -5,
      a: -5,
      beta: -4,
      b: -4,
      RC: -3,
      rc: -3,
      "#": -2,
      p: 1,
      pl: 1,
    };
  for (t = r(t), e = r(e), c = Math.max(t.length, e.length), p = 0; p < c; p++)
    if (t[p] !== e[p]) {
      if (((t[p] = o(t[p])), (e[p] = o(e[p])), t[p] < e[p])) {
        n = -1;
        break;
      }
      if (t[p] > e[p]) {
        n = 1;
        break;
      }
    }
  if (!a) return n;
  switch (a) {
    case ">":
    case "gt":
      return 0 < n;
    case ">=":
    case "ge":
      return 0 <= n;
    case "<=":
    case "le":
      return n <= 0;
    case "===":
    case "=":
    case "eq":
      return 0 === n;
    case "<>":
    case "!==":
    case "ne":
      return 0 !== n;
    case "":
    case "<":
    case "lt":
      return n < 0;
    default:
      return null;
  }
};
var afterpay_cart_integration_enabled,
  afterpay_js_include_version = "1.6.6";
if (void 0 === afterpay_product_integration_enabled)
  var afterpay_product_integration_enabled = !0;
void 0 === afterpay_cart_integration_enabled &&
  (afterpay_cart_integration_enabled = "USD" == afterpay_shop_currency);
if (void 0 === afterpay_cart_dynamic_integration_enabled)
  var afterpay_cart_dynamic_integration_enabled = !1;
if (void 0 === afterpay_variable_price_fallback)
  if ("undefined" == typeof afterpay_variable_price_fallback_selector)
    var afterpay_variable_price_fallback = !1;
  else afterpay_variable_price_fallback = !0;
if (
  ("undefined" == typeof afterpay_variable_price_fallback_method &&
    (afterpay_variable_price_fallback_method = "mutation"),
  void 0 === afterpay_variable_subtotal_fallback)
)
  if ("undefined" == typeof afterpay_variable_subtotal_fallback_selector)
    var afterpay_variable_subtotal_fallback = !1;
  else afterpay_variable_subtotal_fallback = !0;
if (
  ("undefined" == typeof afterpay_variable_subtotal_fallback_method &&
    (afterpay_variable_subtotal_fallback_method = "mutation"),
  void 0 === afterpay_modal_responsive)
)
  if (
    "USD" == afterpay_shop_currency &&
    Afterpay.versionCompare(afterpay_js_snippet_version, "1.0.2", ">=")
  )
    var afterpay_modal_responsive = !0;
  else afterpay_modal_responsive = !1;
if (void 0 === afterpay_show_currency_code)
  if (
    "USD" == afterpay_shop_currency &&
    Afterpay.versionCompare(afterpay_js_snippet_version, "1.0.2", ">=")
  )
    var afterpay_show_currency_code = !1;
  else afterpay_show_currency_code = !0;
if (void 0 === afterpay_hide_range_decimals)
  if (Afterpay.versionCompare(afterpay_js_snippet_version, "1.0.2", ">="))
    var afterpay_hide_range_decimals = !0;
  else afterpay_hide_range_decimals = !1;
if (void 0 === afterpay_hide_upper_limit)
  if (Afterpay.versionCompare(afterpay_js_snippet_version, "1.0.2", ">="))
    var afterpay_hide_upper_limit = !0;
  else afterpay_hide_upper_limit = !1;
if (void 0 === afterpay_hide_lower_limit) var afterpay_hide_lower_limit = !1;
if (void 0 === afterpay_modal_open_icon) var afterpay_modal_open_icon = !1;
if (void 0 === afterpay_min) var afterpay_min = 0.04;
else afterpay_min = Math.max(afterpay_min, 0.04);
if (
  ("USD" == afterpay_shop_currency &&
    (afterpay_min = Afterpay.versionCompare(
      afterpay_js_snippet_version,
      "1.0.4",
      ">="
    )
      ? Math.max(afterpay_min, 1)
      : Math.max(afterpay_min, 35)),
  void 0 === afterpay_max)
)
  if ("USD" == afterpay_shop_currency) var afterpay_max = 1e3;
  else afterpay_max = 2e3;
else
  Afterpay.versionCompare(afterpay_js_snippet_version, "1.0.6", "<=") &&
    "USD" != afterpay_shop_currency &&
    (afterpay_max = 2e3);
if (void 0 === afterpay_logo_theme) var afterpay_logo_theme = "colour";
if (void 0 === afterpay_cbt_enabled) var afterpay_cbt_enabled = !1;
if (void 0 === afterpay_footer_logo_enabled)
  if (Afterpay.versionCompare(afterpay_js_snippet_version, "1.0.5", ">="))
    var afterpay_footer_logo_enabled = !0;
  else afterpay_footer_logo_enabled = !1;
if (void 0 === afterpay_footer_logo_format)
  var afterpay_footer_logo_format = "icon";
if (void 0 === afterpay_footer_logo_theme)
  var afterpay_footer_logo_theme = "colour";
if (void 0 === afterpay_footer_logo_background)
  var afterpay_footer_logo_background = "border";
Afterpay.arrayContainsElement(
  Afterpay.supportedCurrencies,
  afterpay_shop_currency
) &&
  ("function" != typeof jQuery ||
  !Object.prototype.hasOwnProperty.call(jQuery, "fn") ||
  Afterpay.versionCompare(jQuery.fn.jquery, "3.0", "<")
    ? Afterpay.loadScript(
        "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        function () {
          (Afterpay.jQuery_3_4_1 = jQuery.noConflict(!0)),
            Afterpay.init(Afterpay.jQuery_3_4_1);
        }
      )
    : Afterpay.init(jQuery));
</script>
<!-- End Shopify-Afterpay JavaScript Snippet (v1.0.9) -->
<script async src="https://demo.widget.m8buy.co/general/main.js" type="text/javascript"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script>
  $( document ).ready(function() {
    let b = {{ cart.total_price | json }};  
    let x  = {{ cart.attributes.m8buy-group-id }}
	b = Math.round(b*0.2/100, 2) ;
   	
    $(".product__price").append("<label>Activate cashback on your purchase with m8buy.</label>") 
    
});	
  
  	let b = {{ cart.total_price | json }};  
    let x  = {{ cart.attributes.m8buy-group-id }}

	b = Math.round(b*0.2/100, 2) ;
   	
    let parent = document.createElement("span");    
  	parent.setAttribute("class", "m8buy");
  
  	let inputLabel = document.createElement("label");
  	inputLabel.textContent = "Enter your m8buy group key (optional).";
	
  	let learnmore = document.createElement("a");
  	learnmore.textContent = "Learn more.";
  	learnmore.setAttribute("href","https://m8buy.co/#faq-01-369271");  	
  	learnmore.setAttribute("class","m8buyInfo");
	learnmore.setAttribute("target","__blank");
  
  	let t = "Invite a friend to activate up to $"+ b +" cashback with m8buy."  
  	let closeSpan = document.createElement("span");
	closeSpan.textContent = t;

    let inputs = document.createElement("input");
	inputs.setAttribute("type","text");	  	
  	learnmore.setAttribute("class","m8buygroupkey");
  	inputs.setAttribute("name","attributes[m8buy-group-id]");
  	inputs.setAttribute("value","{{ cart.attributes.m8buy-group-id }}");  	
    inputs.setAttribute("placeholder","m8buy group key");
  
  let empty_cart = document.createElement("span");
	 empty_cart.setAttribute("class","m8buy");
	 empty_cart.textContent = "Get cashback for shopping with friends with m8buy";

  	let images = document.createElement("img");
  	images.setAttribute("src", '{{ "Group_22.jpg" | asset_img_url: "50x" }}');
  
  	parent.appendChild(images);
  	parent.appendChild(closeSpan);
 	parent.appendChild(inputLabel);
  	parent.appendChild(inputs);  	
	parent.appendChild(learnmore);	
  
	document.querySelector(".cart__footer").appendChild(parent);
	document.querySelector(".empty-page-content").appendChild(empty_cart);
 
</script>

<style>
.m8buy{ border: 1px solid #8142ff50;  font-weight: bold;padding: 1em;margin-top: 1em;display: grid;grid-gap:1em;}
a.m8buyInfo {color: #8142ff; }
.m8buygroupkey{background-color: #fff;font-weight: normal;color: #8142ff;border-color: #8142ff;}
</style>
