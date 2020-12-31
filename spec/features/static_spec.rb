require 'rails_helper'

RSpec.feature "Statics", type: :feature do
  scenario "valid index path" do
    visit "/"

    expect(page.status_code).to eq(200)
  end
end
