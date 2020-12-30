Rails.application.routes.draw do
  resources :friendships
  resources :users
  post "/login", to: "application#login"
  get "/profile", to: "users#profile"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
