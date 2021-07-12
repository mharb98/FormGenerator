9.times do |i|
    User.create(
      email: "email#{i + 1}@outlook.com",
      password: '12345678'
    )
end