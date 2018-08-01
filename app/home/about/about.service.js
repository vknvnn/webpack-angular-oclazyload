class aboutService {
  constructor($http) {
    this.$http = $http;
  }

  title() {
    return 'This is a title.';
  }
}

aboutService.$inject = [ '$http' ];
export { aboutService }