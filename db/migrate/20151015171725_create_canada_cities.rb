class CreateCanadaCities < ActiveRecord::Migration
  def change
    create_table :contact_canada_cities do |t|
      t.string :name
      t.belongs_to :canada_province, index: true, foreign_key: true
      t.string :canada_province_name, index: true

      t.timestamps null: false
    end
  end
end
