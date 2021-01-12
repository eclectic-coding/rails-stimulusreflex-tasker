Rails.application.routes.draw do
  root "lists#index"

  devise_for :users

end
