/**
 * Copyright 2014 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: Context3DCompareMode
module Shumway.AVMX.AS.flash.display3D {
  import notImplemented = Shumway.Debug.notImplemented;
  import axCoerceString = Shumway.AVMX.axCoerceString;
  export class Context3DCompareMode extends ASObject {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;

    // List of static symbols to link.
    static classSymbols: string [] = null; // [];
    
    // List of instance symbols to link.
    static instanceSymbols: string [] = null; // [];
    
    constructor () {
      super();
    }
    
    // JS -> AS Bindings
    static ALWAYS: string = "always";
    static NEVER: string = "never";
    static LESS: string = "less";
    static LESS_EQUAL: string = "lessEqual";
    static EQUAL: string = "equal";
    static GREATER_EQUAL: string = "greaterEqual";
    static GREATER: string = "greater";
    static NOT_EQUAL: string = "notEqual";
    
    
    // AS -> JS Bindings
    
  }
}
