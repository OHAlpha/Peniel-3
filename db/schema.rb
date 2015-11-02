# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151028155547) do

  create_table "contact_addresses", force: :cascade do |t|
    t.integer  "country_id"
    t.string   "country_name"
    t.integer  "address"
    t.text     "address_text"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "contact_addresses", ["country_id"], name: "index_contact_addresses_on_country_id"

  create_table "contact_canada_addresses", force: :cascade do |t|
    t.string   "apt"
    t.string   "house"
    t.string   "street"
    t.integer  "canada_city_id"
    t.string   "canada_city_name"
    t.integer  "canada_province_id"
    t.string   "canada_province_name"
    t.string   "postal_code"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  add_index "contact_canada_addresses", ["canada_city_id"], name: "index_contact_canada_addresses_on_canada_city_id"
  add_index "contact_canada_addresses", ["canada_city_name"], name: "index_contact_canada_addresses_on_canada_city_name"
  add_index "contact_canada_addresses", ["canada_province_id"], name: "index_contact_canada_addresses_on_canada_province_id"
  add_index "contact_canada_addresses", ["canada_province_name"], name: "index_contact_canada_addresses_on_canada_province_name"
  add_index "contact_canada_addresses", ["postal_code"], name: "index_contact_canada_addresses_on_postal_code"
  add_index "contact_canada_addresses", ["street"], name: "index_contact_canada_addresses_on_street"

  create_table "contact_canada_cities", force: :cascade do |t|
    t.string   "name"
    t.integer  "canada_province_id"
    t.string   "canada_province_name"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  add_index "contact_canada_cities", ["canada_province_id"], name: "index_contact_canada_cities_on_canada_province_id"
  add_index "contact_canada_cities", ["canada_province_name"], name: "index_contact_canada_cities_on_canada_province_name"

  create_table "contact_canada_provinces", force: :cascade do |t|
    t.string   "name"
    t.string   "code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contact_countries", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "alpha_2"
    t.string   "alpha_3"
    t.integer  "numeric"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contact_country_subdivision_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contact_country_subdivisions", force: :cascade do |t|
    t.string   "name"
    t.integer  "country_id"
    t.string   "code"
    t.integer  "contact_country_subdivision_type_id"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "contact_country_subdivisions", ["code"], name: "index_contact_country_subdivisions_on_code"
  add_index "contact_country_subdivisions", ["country_id"], name: "index_contact_country_subdivisions_on_country_id"
  add_index "contact_country_subdivisions", ["name"], name: "index_contact_country_subdivisions_on_name"

  create_table "contact_us_addresses", force: :cascade do |t|
    t.string   "apt"
    t.string   "house"
    t.string   "street"
    t.integer  "us_city_id"
    t.string   "us_city_name"
    t.integer  "us_state_id"
    t.string   "us_state_name"
    t.integer  "zipcode"
    t.integer  "ext"
    t.integer  "dp"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "contact_us_addresses", ["street"], name: "index_contact_us_addresses_on_street"
  add_index "contact_us_addresses", ["us_city_id"], name: "index_contact_us_addresses_on_us_city_id"
  add_index "contact_us_addresses", ["us_city_name"], name: "index_contact_us_addresses_on_us_city_name"
  add_index "contact_us_addresses", ["us_state_id"], name: "index_contact_us_addresses_on_us_state_id"
  add_index "contact_us_addresses", ["us_state_name"], name: "index_contact_us_addresses_on_us_state_name"
  add_index "contact_us_addresses", ["zipcode"], name: "index_contact_us_addresses_on_zipcode"

  create_table "contact_us_cities", force: :cascade do |t|
    t.string   "name"
    t.integer  "us_state_id"
    t.string   "us_state_name"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "contact_us_cities", ["us_state_id"], name: "index_contact_us_cities_on_us_state_id"
  add_index "contact_us_cities", ["us_state_name"], name: "index_contact_us_cities_on_us_state_name"

  create_table "contact_us_phone_numbers", force: :cascade do |t|
    t.integer  "area_code"
    t.integer  "central_office_code"
    t.integer  "station_code"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "contact_us_states", force: :cascade do |t|
    t.string   "name"
    t.string   "code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "page_tags", force: :cascade do |t|
    t.string   "tag"
    t.string   "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
