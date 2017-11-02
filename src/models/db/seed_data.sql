INSERT INTO
  cities (name, image)
VALUES
  ('San Francisco', 'http://showitoffevents.com/Images/upcomingevent/upcomingeventsanfrancisco.jpg'),
  ('Oakland', 'https://i.ytimg.com/vi/8kIQ9KPD2kQ/maxresdefault.jpg'),
  ('London', 'http://www.universal-tourguide.com/wp-content/uploads/2016/10/visitlondonintwodays.jpg'),
  ('Gibraltar', 'https://i0.wp.com/chronicle.gi/wp-content/uploads/2016/02/rock.png?fit=911%2C507'),
  ('Denver', 'https://images.frmonline.com/sites/frc/pct/denver/moving-to-living-in-denver-784.jpg' )
;

INSERT INTO
  posts (user_id, title, body)
VALUES
  (1, 'Hello World', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed eleifend metus. Nullam tincidunt neque aliquam augue dignissim sagittis. Sed non commodo eros. Aenean id ullamcorper nisl, eget tincidunt urna. Etiam ullamcorper magna est, sed auctor erat lobortis quis. Nullam viverra, eros eu fringilla mattis, felis sapien consectetur tortor, nec bibendum metus erat sed leo. Nullam tincidunt, mauris eget ornare lacinia, nisi nisi fermentum lacus, in rhoncus dui ligula nec nunc. Maecenas eleifend turpis at nisi semper pharetra. Etiam maximus at arcu eu imperdiet. Curabitur ut placerat massa, eu blandit arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ultrices rhoncus sapien eget molestie. Nullam mattis tortor semper malesuada congue.'),
  (2, 'Goodbye World', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed eleifend metus. Nullam tincidunt neque aliquam augue dignissim sagittis. Sed non commodo eros. Aenean id ullamcorper nisl, eget tincidunt urna. Etiam ullamcorper magna est, sed auctor erat lobortis quis. Nullam viverra, eros eu fringilla mattis, felis sapien consectetur tortor, nec bibendum metus erat sed leo. Nullam tincidunt, mauris eget ornare lacinia, nisi nisi fermentum lacus, in rhoncus dui ligula nec nunc. Maecenas eleifend turpis at nisi semper pharetra. Etiam maximus at arcu eu imperdiet. Curabitur ut placerat massa, eu blandit arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ultrices rhoncus sapien eget molestie. Nullam mattis tortor semper malesuada congue.'),
  (3, 'It is a wonderful World', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed eleifend metus. Nullam tincidunt neque aliquam augue dignissim sagittis. Sed non commodo eros. Aenean id ullamcorper nisl, eget tincidunt urna. Etiam ullamcorper magna est, sed auctor erat lobortis quis. Nullam viverra, eros eu fringilla mattis, felis sapien consectetur tortor, nec bibendum metus erat sed leo. Nullam tincidunt, mauris eget ornare lacinia, nisi nisi fermentum lacus, in rhoncus dui ligula nec nunc. Maecenas eleifend turpis at nisi semper pharetra. Etiam maximus at arcu eu imperdiet. Curabitur ut placerat massa, eu blandit arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ultrices rhoncus sapien eget molestie. Nullam mattis tortor semper malesuada congue.'),
  (4, 'The World is your oyster', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed eleifend metus. Nullam tincidunt neque aliquam augue dignissim sagittis. Sed non commodo eros. Aenean id ullamcorper nisl, eget tincidunt urna. Etiam ullamcorper magna est, sed auctor erat lobortis quis. Nullam viverra, eros eu fringilla mattis, felis sapien consectetur tortor, nec bibendum metus erat sed leo. Nullam tincidunt, mauris eget ornare lacinia, nisi nisi fermentum lacus, in rhoncus dui ligula nec nunc. Maecenas eleifend turpis at nisi semper pharetra. Etiam maximus at arcu eu imperdiet. Curabitur ut placerat massa, eu blandit arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ultrices rhoncus sapien eget molestie. Nullam mattis tortor semper malesuada congue.'),
  (5, 'Land of many Worlds', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed eleifend metus. Nullam tincidunt neque aliquam augue dignissim sagittis. Sed non commodo eros. Aenean id ullamcorper nisl, eget tincidunt urna. Etiam ullamcorper magna est, sed auctor erat lobortis quis. Nullam viverra, eros eu fringilla mattis, felis sapien consectetur tortor, nec bibendum metus erat sed leo. Nullam tincidunt, mauris eget ornare lacinia, nisi nisi fermentum lacus, in rhoncus dui ligula nec nunc. Maecenas eleifend turpis at nisi semper pharetra. Etiam maximus at arcu eu imperdiet. Curabitur ut placerat massa, eu blandit arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ultrices rhoncus sapien eget molestie. Nullam mattis tortor semper malesuada congue.')
;

INSERT INTO
  cities_posts (city_id, post_id)
VALUES
  (1, 5),
  (2, 3),
  (3, 4),
  (4, 1),
  (5, 2)
;
