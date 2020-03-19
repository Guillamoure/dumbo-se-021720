class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.belongs_to :customer, foreign_key: true
      t.belongs_to :meal_type, foreign_key: true

      t.timestamps
    end
  end
end
