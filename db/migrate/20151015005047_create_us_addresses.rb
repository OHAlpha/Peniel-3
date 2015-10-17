class CreateUsAddresses < ActiveRecord::Migration
  def change
    create_table :contact_us_addresses do |t|
      t.string :apt
      t.string :house
      t.string :street
      t.integer :us_city_id
      t.string :cityname
      t.integer :us_state_id
      t.integer :zipcode
      t.integer :ext
      t.integer :dp

      t.timestamps null: false
    end
    add_foreign_key :us_addresses, :us_cities
    add_foreign_key :us_addresses, :us_states
  end
end