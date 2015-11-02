class CreateContactAddresses < ActiveRecord::Migration
  def change
    create_table :contact_addresses do |t|
      t.belongs_to :country, index: true, foreign_key: true
      t.string :country_name
      t.integer :address
      t.text :address_text

      t.timestamps null: false
    end
  end
end
