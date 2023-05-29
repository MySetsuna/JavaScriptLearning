function f() {
  try {
    throw "bogus";
  } catch (e) {
    t = undefined;
    console.log(t);
    console.log(t.d);
    console.log('caught inner "bogus"');
    t = undefined;
    throw e; // this throw statement is suspended until
    // finally block has completed
  } finally {
    return undefined; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  f();
} catch (e) {
  // this is never reached because the throw inside
  // the catch is overwritten
  // by the return in finally
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
