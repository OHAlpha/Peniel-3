class CreateContactCountrySubdivisions < ActiveRecord::Migration
  def change
    create_table :contact_country_subdivisions do |t|
      t.string :name, index: true
      t.belongs_to :country, index: true, foreign_key: true
      t.string :code, index: true
      t.integer :contact_country_subdivision_type_id

      t.timestamps null: false
    end
    add_foreign_key :contact_country_subdivision, :contact_country_subdivision_type_id, name: "index_subdivision_on_type_id"
  end
end
