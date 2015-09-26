Rails.application.routes.draw do

  deflayout = 'bubble'
  defstyle = 'default'

  root 'navigation#home', defaults: { layout: deflayout, style: defstyle }

  get 'navigation/index' => 'navigation#home', defaults: { layout: deflayout, style: defstyle }
  get 'navigation/home', as: :nav_home, defaults: { layout: deflayout, style: defstyle }
  get 'navigation/search', as: :nav_search, defaults: { layout: deflayout, style: defstyle }
  get 'navigation/popular', as: :nav_popular, defaults: { layout: deflayout, style: defstyle }
  get 'navigation/sitemap', as: :nav_map, defaults: { layout: deflayout, style: defstyle }
  
  get 'account/index', as: :account, defaults: { layout: deflayout, style: defstyle }
  get 'account/register', as: :account_register, defaults: { layout: deflayout, style: defstyle }
  get 'account/login', as: :account_login, defaults: { layout: deflayout, style: defstyle }
  get 'account/logout', as: :account_logout, defaults: { layout: deflayout, style: defstyle }
  get 'account/leave', as: :account_leave, defaults: { layout: deflayout, style: defstyle }
  get 'account/settings', as: :account_settings, defaults: { layout: deflayout, style: defstyle }

  get 'about/index', as: :about, defaults: { layout: deflayout, style: defstyle }
  get 'about/peniel', as: :about_peniel, defaults: { layout: deflayout, style: defstyle }
  get 'about/adventism', as: :about_adventism, defaults: { layout: deflayout, style: defstyle }
  get 'about/christianity', as: :about_christianity, defaults: { layout: deflayout, style: defstyle }

  get 'learn/index', as: :learn, defaults: { layout: deflayout, style: defstyle }
  get 'learn/bible', as: :learn_bible, defaults: { layout: deflayout, style: defstyle }
  get 'learn/science', as: :learn_science, defaults: { layout: deflayout, style: defstyle }
  get 'learn/health', as: :learn_health, defaults: { layout: deflayout, style: defstyle }

  get 'news/index', as: :news, defaults: { layout: deflayout, style: defstyle }
  get 'news/world', as: :news_world, defaults: { layout: deflayout, style: defstyle }
  get 'news/church', as: :news_church, defaults: { layout: deflayout, style: defstyle }
  get 'news/peniel', as: :news_peniel, defaults: { layout: deflayout, style: defstyle }
  get 'news/events', as: :news_events, defaults: { layout: deflayout, style: defstyle }

  get 'resources/index', as: :resources, defaults: { layout: deflayout, style: defstyle }
  get 'resources/media', as: :resources_media, defaults: { layout: deflayout, style: defstyle }
  get 'resources/store', as: :resources_store, defaults: { layout: deflayout, style: defstyle }
  get 'resources/games', as: :resources_games, defaults: { layout: deflayout, style: defstyle }
  get 'resources/links', as: :resources_links, defaults: { layout: deflayout, style: defstyle }

  get 'contribute/index', as: :contribute, defaults: { layout: deflayout, style: defstyle }
  get 'contribute/give', as: :contribute_give, defaults: { layout: deflayout, style: defstyle }
  get 'contribute/join', as: :contribute_join, defaults: { layout: deflayout, style: defstyle }

  get 'reference/index', as: :reference, defaults: { layout: deflayout, style: defstyle }
  get 'reference/contact_us', as: :reference_contact_us, defaults: { layout: deflayout, style: defstyle }
  get 'reference/departments', as: :reference_departments, defaults: { layout: deflayout, style: defstyle }
  get 'reference/webdeveloper', as: :reference_web_developer, defaults: { layout: deflayout, style: defstyle }
  
end