require 'test_helper'

class SocialControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get facebook" do
    get :facebook
    assert_response :success
  end

  test "should get twitter" do
    get :twitter
    assert_response :success
  end

end
