class CreateUsStates < ActiveRecord::Migration
  def change
    create_table :contact_us_states do |t|
      t.string :name
      t.string :code

      t.timestamps null: false
    end
  end
end
