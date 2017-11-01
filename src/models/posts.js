<%- include ../partials/header.ejs %>

  <div class="flex-container">
    <div>
      <img class="public-profile-image" src="http://via.placeholder.com/150x150">
      <p name:"name">Name: <%= user.full_name %> </p>
      <p name:"dateJoined">Date Joined: <%= user.join_date %> </p>
      <p name:"currentCity">Current City: <%= user.current_city %> </p>
    </div>
    <section>

    <% posts.forEach(function(post) { %>
      <p><%= post.title %></p>
      <p><%= post.body %></p>
    <% }) %>

    </section>
</div>
  </body>
</html>
