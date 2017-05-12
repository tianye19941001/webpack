<div class="layer">
    <img src="${require('../../assets/bg.png')}" alt="">
    <div> this is a layer <%= name %></div>
    <% for (var i = 0; i< arr.length ;i++) { %>
        <%= arr[i] %>
    <% } %>
</div>