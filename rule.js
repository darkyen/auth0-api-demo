function (user, context, callback) {
    
    if (context.idToken) {
      console.log(context, user);
      const apiIdentifier = context.request.query.audience;
      if (user.email === configuration.ADMIN_EMAIL) {
         console.log("it should add email");
         context.accessToken[ + '/role'] = 'admin';
         context.idToken[+ '/role'] = 'admin';
      }
    }    
    return callback(null, user, context);
}