require 'test_helper'

class AboutControllerTest < ActionController::TestCase
  test "should get peniel" do
    get :peniel
    assert_response :success
  end

  test "should get adventism" do
    get :adventism
    assert_response :success
  end

  test "should get christianity" do
    get :christianity
    assert_response :success
  end

end
