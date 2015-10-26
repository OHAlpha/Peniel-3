class CreateUsAddresses < ActiveRecord::Migration
  def change
    create_table :contact_us_addresses do |t|
      t.string :apt
      t.string :house
      t.string :street
      t.belongs_to :us_city, index: true
      t.string :cityname
      t.belongs_to :us_state, index: true
      t.integer :zipcode
      t.integer :ext
      t.integer :dp

      t.timestamps null: false
    end
  end
end