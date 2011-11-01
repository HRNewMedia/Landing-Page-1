LandingPage::Application.routes.draw do

  root to: 'pages#index'

  match 'danke', to: 'pages#danke'
  match 'fehler', to: 'pages#fehler'

  resources :emails
end
