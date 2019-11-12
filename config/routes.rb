Rails.application.routes.draw do
  resources :iniciemos
  resources :nosotros
  resources :contactos
  root to: "pages#index" 
end

