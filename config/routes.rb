Rails.application.routes.draw do

  namespace :contact do
  get 'countries/index'
  end

  deflayout = 'bubble'
  defstyle = 'default'

  root 'navigation#home', defaults: { layout: deflayout, style: defstyle }
  get 'index', to: redirect('')

  get 'navigation' => 'navigation#index', as: :navigation, defaults: { layout: deflayout, style: defstyle }
  get 'navigation/index', to: redirect('navigation')
  get 'navigation/home', as: :nav_home, defaults: { layout: deflayout, style: defstyle }
  get 'navigation/search', as: :nav_search, defaults: { layout: deflayout, style: defstyle }
  get 'navigation/popular', as: :nav_popular, defaults: { layout: deflayout, style: defstyle }
  get 'navigation/sitemap', as: :nav_map, defaults: { layout: deflayout, style: defstyle }
  
  get 'account' => 'account#index', as: :account, defaults: { layout: deflayout, style: defstyle }
  get 'account/index', to: redirect('account')
  get 'account/register', as: :account_register, defaults: { layout: deflayout, style: defstyle }
  get 'account/login', as: :account_login, defaults: { layout: deflayout, style: defstyle }
  get 'account/logout', as: :account_logout, defaults: { layout: deflayout, style: defstyle }
  get 'account/leave', as: :account_leave, defaults: { layout: deflayout, style: defstyle }
  get 'account/settings', as: :account_settings, defaults: { layout: deflayout, style: defstyle }

  get 'about' => 'about#index', as: :about, defaults: { layout: deflayout, style: defstyle }
  get 'about/index', to: redirect('about')
  get 'about/peniel', as: :about_peniel, defaults: { layout: deflayout, style: defstyle }
  get 'about/adventism', as: :about_adventism, defaults: { layout: deflayout, style: defstyle }
  get 'about/christianity', as: :about_christianity, defaults: { layout: deflayout, style: defstyle }

  get 'learn' => 'learn#index', as: :learn, defaults: { layout: deflayout, style: defstyle }
  get 'learn/index', to: redirect('learn')
  get 'learn/bible', as: :learn_bible, defaults: { layout: deflayout, style: defstyle }
  get 'learn/science', as: :learn_science, defaults: { layout: deflayout, style: defstyle }
  get 'learn/health', as: :learn_health, defaults: { layout: deflayout, style: defstyle }

  get 'news' => 'news#index', as: :news, defaults: { layout: deflayout, style: defstyle }
  get 'news/index', to: redirect('news')
  get 'news/world', as: :news_world, defaults: { layout: deflayout, style: defstyle }
  get 'news/church', as: :news_church, defaults: { layout: deflayout, style: defstyle }
  get 'news/peniel', as: :news_peniel, defaults: { layout: deflayout, style: defstyle }
  get 'news/events', as: :news_events, defaults: { layout: deflayout, style: defstyle }

  get 'resources' => 'resources#index', as: :resources, defaults: { layout: deflayout, style: defstyle }
  get 'resources/index', to: redirect('resources')
  get 'resources/media', as: :resources_media, defaults: { layout: deflayout, style: defstyle }
  get 'resources/store', as: :resources_store, defaults: { layout: deflayout, style: defstyle }
  get 'resources/games', as: :resources_games, defaults: { layout: deflayout, style: defstyle }
  get 'resources/links', as: :resources_links, defaults: { layout: deflayout, style: defstyle }

  get 'contribute' => 'contribute#index', as: :contribute, defaults: { layout: deflayout, style: defstyle }
  get 'contribute/index', to: redirect('contribute')
  get 'contribute/give', as: :contribute_give, defaults: { layout: deflayout, style: defstyle }
  get 'contribute/join', as: :contribute_join, defaults: { layout: deflayout, style: defstyle }

  get 'social' => 'social#index', as: :social, defaults: { layout: deflayout, style: defstyle }
  get 'social/index', to: redirect('social')
  get 'social/facebook', as: :social_facebook, defaults: { layout: deflayout, style: defstyle }
  get 'social/twitter', as: :social_twitter, defaults: { layout: deflayout, style: defstyle }

  get 'reference' => 'reference#index', as: :reference, defaults: { layout: deflayout, style: defstyle }
  get 'reference/index', to: redirect('reference')
  get 'reference/contact_us', as: :reference_contact_us, defaults: { layout: deflayout, style: defstyle }
  get 'reference/departments', as: :reference_departments, defaults: { layout: deflayout, style: defstyle }
  get 'reference/webdeveloper', as: :reference_web_developer, defaults: { layout: deflayout, style: defstyle }

  get 'developer/countries' => 'contact/countries#index'
  get 'developer/us_states' => 'contact/us_states#index'
  get 'developer/us_cities' => 'contact/us_cities#index'
  get 'developer/us_addresses' => 'contact/us_addresses#index'
  get 'developer/canada_provinces' => 'contact/canada_provinces#index'
  get 'developer/canada_cities' => 'contact/canada_cities#index'
  get 'developer/canada_addresses' => 'contact/canada_addresses#index'
  
end