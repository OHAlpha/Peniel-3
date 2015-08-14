require 'test_helper'

class NewsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get world" do
    get :world
    assert_response :success
  end

  test "should get church" do
    get :church
    assert_response :success
  end

  test "should get peniel" do
    get :peniel
    assert_response :success
  end

  test "should get events" do
    get :events
    assert_response :success
  end

end
