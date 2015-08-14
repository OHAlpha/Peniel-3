Rails.application.routes.draw do

  root 'navigation#home'

  get 'navigation/index' => 'navigation#home'
  get 'navigation/home', as: :nav_home
  get 'navigation/search', as: :nav_search
  get 'navigation/popular', as: :nav_popular
  get 'navigation/sitemap', as: :nav_map
  
  get 'account/index', as: :account
  get 'account/register', as: :account_register
  get 'account/login', as: :account_login
  get 'account/logout', as: :account_logout
  get 'account/leave', as: :account_leave
  get 'account/settings', as: :account_settings

  get 'about/index', as: :about
  get 'about/peniel', as: :about_peniel
  get 'about/adventism', as: :about_adventism
  get 'about/christianity', as: :about_christianity

  get 'learn/index', as: :learn
  get 'learn/bible', as: :learn_bible
  get 'learn/science', as: :learn_science
  get 'learn/health', as: :learn_health

  get 'news/index', as: :news
  get 'news/world', as: :news_world
  get 'news/church', as: :news_church
  get 'news/peniel', as: :news_peniel
  get 'news/events', as: :news_events

  get 'resources/index', as: :resources
  get 'resources/media', as: :resources_media
  get 'resources/store', as: :resources_store
  get 'resources/games', as: :resources_games
  get 'resources/links', as: :resources_links

  get 'reference/index', as: :reference
  get 'reference/contact_us', as: :reference_contact_us
  get 'reference/departments', as: :reference_departments
  get 'reference/webdeveloper', as: :reference_web_developer
  
end