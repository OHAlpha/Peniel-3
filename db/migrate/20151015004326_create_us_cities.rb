class CreateUsCities < ActiveRecord::Migration
  def change
    create_table :contact_us_cities do |t|
      t.string :name
      t.belongs_to :us_state, index: true, foreign_key: true
      t.string :us_state_name, index: true

      t.timestamps null: false
    end
  end
end
