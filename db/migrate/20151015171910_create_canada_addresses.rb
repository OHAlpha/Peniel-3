class CreateCanadaAddresses < ActiveRecord::Migration
  def change
    create_table :contact_canada_addresses do |t|
      t.string :apt
      t.string :house
      t.string :street
      t.integer :canada_city_id
      t.string :cityname
      t.integer :canada_province_id
      t.string :zipcode

      t.timestamps null: false
    end
    add_foreign_key :canada_addresses, :canada_cities
    add_foreign_key :canada_addresses, :canada_provinces
  end
end
