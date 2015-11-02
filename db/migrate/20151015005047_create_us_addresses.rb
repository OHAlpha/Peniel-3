class CreateUsAddresses < ActiveRecord::Migration
  def change
    create_table :contact_us_addresses do |t|
      t.string :apt
      t.string :house
      t.string :street, index: true
      t.belongs_to :us_city, index: true, foreign_key: true
      t.string :us_city_name, index: true
      t.belongs_to :us_state, index: true, foreign_key: true
      t.string :us_state_name, index: true
      t.integer :zipcode, index: true
      t.integer :ext
      t.integer :dp

      t.timestamps null: false
    end
  end
end