# ClientSideFetchXmlObjectLibraries
JavaScript and TypeScript libraries which provide an object model for Microsoft Dynamics CRM FetchXML Queries

These libraries provide an object model to compose FetchXml queries using either JavaScript directly, 
or by using TypeScript. 
##In this README
* [Ordinary use cases for client-side fetchXml queries](#ordinary-use-cases-for-client-side-fetchxml-queries)
* [Why these libraries?](#why-these-libraries)
* [Convert from XML to object and back](#convert-from-xml-to-object-and-back)
* [Why two separate libraries?](#why-two-separate-libraries)
* [When to use these libraries?](#when-to-use-these-libraries)
* [Examples](#examples)
* [Why do some classes have a read-only hash property?](#why-do-some-classes-have-a-read-only-hash-property)
* [How were these tested?](#how-were-these-tested)
* [Why aren't these in the CRM SDK?](#why-arent-these-in-the-crm-sdk)

##Ordinary use cases for client-side fetchXml queries
Typically developers will use the advanced find tool in the CRM web application to compose a query and then 
download the fetchxml definition of the query. They can then modify the query as needed and use the fetch.xsd 
schema from the SDK if they want to make sure that the edits they make are valid according to the schema. They 
can then include include the fetchxml query definition as a string within JavaScript functions in the application.
This approach is effective and these libraries are not intended as a replacement for this proven approach.

##Why these libraries?
These libraries are  an experiment to provide a better development experience when a developer wants
more flexibilty to compose a query programmatically. With the 2011 (SOAP) endpoint C# developers can use the
[QueryExpression Class](https://msdn.microsoft.com/en-us/library/microsoft.xrm.sdk.query.queryexpression.aspx) 
to compose queries. With JavaScript, the [Sdk.Soap.js](https://code.msdn.microsoft.com/SdkSoapjs-9b51b99a) sample
library provides an Sdk.Query.QueryExpression class which provides the same functionality.

However, with the Microsoft Dynamics CRM Web API there is no similar object designed to compose queries 
programmatically. You can compose queries using the OData syntax 
(see [Query Data using the Web API](https://msdn.microsoft.com/en-us/library/gg334767.aspx)), but this doesn't
yet provide all the capabilities of FetchXML. So these libraries were created in an effort to see whether providing
a wrapper around the objects defined by the fetchXML could provide a better way to compose queries in code.

Both of these libraries provide the same interface which allows for instantiating instances of objects defined 
in the FetchXML Schema and public properties to set the values. In addition, these libraries provide methods 
to set every property and add or remove objects from collections. These methods are chainable because they return 
the object that they are applied to.

##Convert from XML to object and back
Both of these libraries provide a `Sdk.FetchXml.fromXml` static method which accept a fetchXML string and 
return an `Sdk.FetchXML.fetch` object with all the child objects contained within it. The 
`Sdk.FetchXml.fetch.toXml` method returns a string that is the valid fetchXml for the objects contained within it.
So this is basically a way to deserialize and serialize the fetchXml into the `Sdk.FetchXml.fetch` object.

##Why two separate libraries?
I wrote the JavaScript library first. Then I wrote the TypeScript version because more and more people have been 
asking for TypeScript libraries. Not having a lot of experience with TypeScript, I wanted to see how it could be
used to get the same result I'm used to getting with JavaScript. In the end, I was able to get the same interfaces
but I had to apply some different strategies.

For example, in JavaScript I prefer to return sealed objects because I want to eliminate the possiblity that people
might add or remove the properties of the class instances. In Typescript I found I had to enable 
[Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) to get the behavior I wanted. So you will 
need to enable `experimentalDecorators` and use a tsconfig.json with this setting set to true. Also, in JavaScript I
like to use [Object.freeze](https://msdn.microsoft.com/en-us/library/ff806186.aspx) for static objects I use for enumerations.
Seems that TypeScript enumerations can only have number values, so I used decorators again to ensure that the properties
for these object could not be modified.

##When to use these libraries?
These libraries are relatively large (3000+ lines of code) and even minified they are about 40KB. For the typical use
case where a developer simply needs to configure a relatively static query, or just include a few variables, the approach
described in [Ordinary use cases for client-side fetchXml queries](#ordinary-use-cases-for-client-side-fetchxml-queries) 
is still probably the most effective approach for client-side scripts.

I expect that these libraries may be helpful when a developer needs to provide a user interface like the advanced find tool
in the CRM application. I can imagine leveraging CRM metadata  together with these libraries to create this experience.
Or perhaps a developer will leverage the objects in this library to provide an IQueryable type interface specifically for 
Microsoft CRM queries.

If you use these libraries, please let me know how you use them.

##Examples
Looking at the example in the CRM SDK [Use FetchXML to construct a query](https://msdn.microsoft.com/en-us/library/gg328117.aspx).
```xml
<fetch mapping='logical'>
   <entity name='account'> 
      <attribute name='accountid'/> 
      <attribute name='name'/> 
      <link-entity name='systemuser' to='owninguser'> 
         <filter type='and'> 
            <condition attribute='lastname' operator='ne' value='Cannon' /> 
          </filter> 
      </link-entity> 
   </entity> 
</fetch> 
```
The following JavaScript produces the equivalent XML:
```javascript
    var ns = Sdk.FetchXml;
    var q = ns.fetch(
        ns.entity("account")
        .addAttribute("accountid")
        .addAttribute("name")
        .addLinkEntity(
            ns.linkEntity("systemuser",null,"owninguser")
            .addFilter(
                ns.filter(ns.FilterType.And)
                .addCondition(
                    ns.condition(
                        "lastname",
                        ns.Operator.NotEqual,
                        [ns.value("Cannon")]
                    )
                )
            )
        )
    )
    console.log(q.toXml());
```
Note that specifying a namespace variable, in this case `ns` means less typing. Also notice that using the `new` keyword
is optional when instantiating classes. The classes are defined so that they will still work if you forget to use it.

The enumerations return string values. You can use string values instead of the enumerations if you know them, but they must match the 
value of an enumeration. i.e. Use either `Sdk.FetchXml.FilterType.And` or just `and`. 

Also note the exclusive use of the chained add* methods to compose the object. The same query could also be composed this way:
```javascript
    var ns = Sdk.FetchXml;
    var condition = ns.condition("lastname", ns.Operator.NotEqual, [ns.value("Cannon")]);
    var filter = ns.filter(ns.FilterType.And);
    filter.conditions = [condition];
    var linkEntity = ns.linkEntity("systemuser");
    linkEntity.to = "owninguser";
    linkEntity.filters = [filter];
    var entity = ns.entity("account", [ns.attribute("accountid"), ns.attribute("name")]);
    entity.linkEntities = [linkEntity];
    var q = ns.fetch(entity);
    console.log(q.toXml());
```
But I think this style is difficult to read. But these can also be used in combination:
```javascript
    var ns = Sdk.FetchXml;
    var condition = ns.condition("lastname", ns.Operator.NotEqual, [ns.value("Cannon")]);

    var filter = ns.filter(ns.FilterType.And)
    .addCondition(condition);
    
    var linkEntity = ns.linkEntity("systemuser",null,"owninguser")
    .addFilter(filter);
    
    var entity = ns.entity("account", [ns.attribute("accountid"), ns.attribute("name")])
    .addLinkEntity(linkEntity);

    var q = ns.fetch(entity);
    console.log(q.toXml());
```

All values must be set using an array, even when there is just a single value. If it is a single value, the XML will set 
the value as an attribute on the condition. If multiple values are used, they will result in separate child `value` elements
of the condition element.

TypeScript is very similar to JavaScript except that you must use the `new` keyword.
```typescript
    var ns = Sdk.FetchXml;
    var q = new ns.fetch(
        new ns.entity("account")
            .addAttribute("accountid")
            .addAttribute("name")
            .addLinkEntity(
            new ns.linkEntity("systemuser",null,"owninguser")
                .addFilter(
                new ns.filter(ns.FilterType.And)
                    .addCondition(
                    new ns.condition(
                        "lastname",
                        ns.Operator.NotEqual,
                        [new ns.value("Cannon")]
                    )
                )
            )
        )
    );
    console.log(q.toXml());
```
##Why do some classes have a read-only hash property?
In order to implement methods to add or remove items from a collection it was challenging to identify which specific item
to remove. If you had an instance of an object used in a query that would match using a `===` operator, you can detect it
and remove it by reference. But if you add an object using the chaining methods you wouldn't have a reference and none of these
objects have a unique identifier property. So I found some code on stack overflow 
[Generate a Hash from string in Javascript/jQuery](http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery)
which cited this source [Javascript implementation of Java’s String.hashCode() method](http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/)
Using this extension to the String.prototype, I implemented a read-only hash property that seems to uniquely match the available 
property values for each object. Using this property, I implemented various `remove*` methods that will remove a matching object from a reference
when you don't happen to have a reference to it. There are also various `remove*ByRef` methods you can use if you do have a reference
to an item in a collection.
For  `Sdk.FetchXml.entity`, `Sdk.FetchXml.linkEntity` and `Sdk.FetchXml.condition`, there are `removeAttributeByName` and `removeValueByValue` methods 
because it seems that people will want to remove attributes or values based on the name or value directly.

##How were these tested?
To test these I wrote a script to retrieve the fetchXML for all the system views (savedquery entity) and pass the string to the 
`Sdk.FetchXml.fetch.fromXml` method to instantiate the object. Then I called the `toXml` method on that instantiated object. 
After a few normalization adjustments, I compared the length of the strings to make sure they were identical.
Most of the normalization adjustments had to do with inconsistent closing of elements, whether default attribute values were set, 
and different ways to set boolean values.
The following is the function I used that highlight where differences were found that had no impact on the query defined:
```javascript
function normalizeStrings(str) {

    if (str.indexOf(" distinct=\"false\"") > -1) {
        str = str.replace(" distinct=\"false\"", "");
    }

    if (str.indexOf("\"></link-entity>") > -1) {
        str = str.replace("\"></link-entity>", "\" />");
    }

    if (str.indexOf("\"></order>") > -1) {
        str = str.replace("\"></order>", "\" />");
    }

    if (str.indexOf("\"></condition>") > -1) {
        str = str.replace("\"></condition>", "\" />");
    }

    if (str.indexOf("isquickfindfields=\"1\"") > -1) {
        str = str.replace("isquickfindfields=\"1\"", "isquickfindfields=\"true\"");
    }

    if (str.indexOf("<filter>") > -1) {
        str = str.replace("<filter>", "<filter type=\"and\">");
    }

    if (str.indexOf("<filter />") > -1) {
        str = str.replace("<filter />", "<filter type=\"and\" />");
    }

    if (str.indexOf(" descending=\"false\"") > -1) {
        str = str.replace(" descending=\"false\"", "");
    }
    return str;
}
```

##Why aren't these in the CRM SDK?
A combination of reasons:
* It isn't known whether people are interested in this style of composing queries. If we publish them in the SDK it would 
seem like this is something the CRM product team thinks people want an need. You might start seeing questions about it on 
certification exams.
* I wrote these on my own time just as an experiment. If I include them in the SDK we are obligated to maintain them.
* I used some code I found on stack overflow to implement hash values for classes which may be in a collection. 
(See [Why do some classes have a read-only hash property?](#why-do-some-classes-have-a-read-only-hash-property)) 
This is not allowed for official Microsoft samples.
* I would like to share these with the community. If you have an enhancement, GitHub makes it easy for you to contribute it.