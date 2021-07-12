Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/index'
      post 'users/create'
      get 'users/show/:id', to: 'users#show'
      get 'users/destroy/:id', to: 'users#destroy'
    end
  end

  root 'homepage#index'
  get '/register' => 'homepage#index'
  get '/profile' => 'homepage#index'
  get '/form/:formName' => 'homepage#index'

end
