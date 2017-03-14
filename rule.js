function (user, context, callback) {
    
    if (context.idToken) {
      console.log(context, user);
      const apiIdentifier = context.request.query.audience;
      if (user.email === configuration.ADMIN_EMAIL) {
         console.log("it should add role");
         // Just make sure its santized
         context.accessToken[ apiIdentifier + '/role'] = 'admin';
         context.idToken[apiIdentifier + '/role'] = 'admin';
      }
    }    
    return callback(null, user, context);
}
