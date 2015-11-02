require 'test_helper'

class ContributeControllerTest < ActionController::TestCase
  test "should get give" do
    get :give
    assert_response :success
  end

  test "should get join" do
    get :join
    assert_response :success
  end

end
