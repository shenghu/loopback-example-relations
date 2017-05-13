// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-example-relations
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function(Customer) {
   Customer.remoteMethod('find', {
     accepts: [{ arg: 'filter', type: 'String', http: { source: 'query' } }],
     returns: { arg: 'result', type: [Customer.modelName], root: true },
     http: { path: '/', verb: 'get' },
   });
};
