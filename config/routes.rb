LandingPage::Application.routes.draw do

  root to: 'emails#new'

  match 'danke', to: 'pages#danke'
  match 'fehler', to: 'pages#fehler'
  match 'beispielrechnung', to: 'pages#beispielrechnung'

  resources :emails
end
