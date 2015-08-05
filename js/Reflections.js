function injectFunction(toAdd, functionName, object) {
  if (toAdd == null)
    throw new TypeError('Expected Function, got null');
  if (typeof toAdd != "function")
    throw new TypeError('Expected Function, got ' + typeof toAdd);
  if (functionName == null)
    throw new TypeError('Expected String, got null');
  if (typeof functionName != "string")
    throw new TypeError('Expected String, got ' + typeof functionName);
  if (object == null)
    window[functionName] = toAdd;
  else {
    if (typeof object != "object")
      throw new TypeError('Expected Object, got ' + typeof object);
    object[functionName] = toAdd;
  }
  return toAdd;
}

function injectField(toAdd, fieldName, object) {
  if (toAdd == null)
    throw new TypeError('Expected Object, got null');
  if (typeof toAdd == "function")
    throw new TypeError('Expected Object, got function');
  if (fieldName == null)
    throw new TypeError('Expected String, got null');
  if (typeof fieldName == "function")
    throw new TypeError('Expected String, got function');
  if (object == null)
    window[fieldName] = toAdd;
  else {
    if (typeof object != "object")
      throw new TypeError('Expected Object, got ' + typeof object);
    object[fieldName] = toAdd;
  }
  return toAdd;
}

function getFunctionByName(objectToGet, functionName) {
  if (functionName == null)
    throw new TypeError('Expected String, got null');
  if (typeof functionName != "string")
    throw new TypeError('Expected String, got ' + typeof functionName);
  if (typeof objectToGet != "object")
    throw new TypeError('Expected Object, got ' + typeof objectToGet);
  if (objectToGet != null) {
    toReturn = objectToGet[functionName];
  } else {
    toReturn = window[functionName]
  }
  if (typeof toReturn != "function")
    throw new TypeError('Field ' + functionName + ' is not a function!');
  return toReturn;
}

function getFieldByName(objectToGet, fieldName) {
  if (typeof objectToGet != "object")
    throw new TypeError('Expected Object, got ' + typeof objectToGet);
  if (fieldName == null)
    throw new TypeError('Expected String, got null');
  if (typeof fieldName != "string")
    throw new TypeError('Expected String, got ' + typeof fieldName);
  if (objectToGet != null) {
    toReturn = objectToGet[fieldName];
  } else {
    toReturn = window[fieldName];
  }
  if (typeof toReturn == "function")
    throw new TypeError('Field ' + toReturn + ' is a function!');
  return toReturn;
}

function runFunctionByName(object, functionName) {
  newArgs = [];
  for (p = 2; p < arguments.length; ++p) {
    newArgs.push(arguments[p]);
  }
  return getFunctionByName(object, functionName).apply(
      (object == null ? object : window), newArgs);
}