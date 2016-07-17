var Sdk = window.Sdk || {};
Sdk.FetchXml = Sdk.FetchXml || {};
(function () {
    //Variable to allow changing of namespace references in error messages
    var n = "Sdk.FetchXml";
    /** @description Contains the data for a fetchXml fetch element.
    * @param {Sdk.FetchXml.entity} [entity]   An Sdk.FetchXML.entity
    * @property {boolean} aggregate Gets or sets the aggregate attribute of the fetch element.
    * @property {number} count Gets or sets the count attribute of the fetch element.
    * @property {boolean} distinct Gets or sets the distinct attribute of the fetch element.
    * @property {Sdk.FetchXML.entity} entity Gets or sets the entity attribute of the fetch element.
    * @property {Sdk.FetchXml.Mapping} mapping Gets or sets the mapping attribute of the fetch element.
    * @property {boolean} minActiveRowVersion Gets or sets the minActiveRowVersion attribute of the fetch element.
    * @property {boolean} noLock Gets or sets the noLock attribute of the fetch element.
    * @property {Sdk.FetchXml.order} order Gets or sets the order attribute of the fetch element.
    * @property {Sdk.FetchXml.OutputFormat} outputFormat Gets or sets the outputFormat attribute of the fetch element.
    * @property {number} page Gets or sets the page attribute of the fetch element.
    * @property {string} pagingCookie Gets or sets the pagingCookie attribute of the fetch element.
    * @property {boolean} returnTotalRecordCount Gets or sets the returnTotalRecordCount attribute of the fetch element.
    * @property {number} top Gets or sets the top attribute of the fetch element.
    * @property {number} utcOffset Gets or sets the utcOffset attribute of the fetch element.
    * @property {string} version Gets or sets the version attribute of the fetch element.
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch = function (entity) {
        if (!(this instanceof Sdk.FetchXml.fetch))
        { return new Sdk.FetchXml.fetch(entity) }

        var _count, _order, _page, _pagingCookie, _top, _utcOffset, _entity;
        var _aggregate = false;
        var _minActiveRowVersion = null;
        var _noLock = null;
        var _returnTotalRecordCount = null;
        var _mapping = Sdk.FetchXml.Mapping.Logical; //Default value
        var _version = null;
        var _outputFormat = null;
        var _distinct = false;

        Object.defineProperties(this, {
            "aggregate": {
                get: function () { return _aggregate; },
                set: function (value) {
                    if (!isBoolean(value)) {
                        throw new Error(n + ".fetch aggregate property must be a boolean value;")
                    }
                    _aggregate = value;
                },
                enumerable: true
            },
            "count": {
                get: function () { return _count; },
                set: function (value) {
                    if (!isNumberOrNull(value)) {
                        throw new Error(n + ".fetch count property must be a number value or null.");
                    }
                    _count = value;
                },
                enumerable: true
            },
            "distinct": {
                get: function () { return _distinct; },
                set: function (value) {
                    if (!isBoolean) {
                        throw new Error(n + ".fetch distinct property must be a boolean value;")
                    }
                    _distinct = value;
                },
                enumerable: true
            },
            "entity": {
                get: function () { return _entity; },
                set: function (value) {
                    if (!isEntity(value)) {
                        throw new Error(n + ".fetch entity property must be a " + n + ".entity value or null.");
                    }
                    _entity = value;
                },
                enumerable: true
            },
            "mapping": {
                get: function () { return _mapping; },
                set: function (value) {
                    if (!isEnumMember(Sdk.FetchXml.Mapping, value)) {
                        throw new Error(n + ".fetch mapping property must be a " + n + ".Mapping value.");
                    }
                    _mapping = value;
                },
                enumerable: true
            },
            "minActiveRowVersion": {
                get: function () { return _minActiveRowVersion; },
                set: function (value) {
                    if (!isBooleanOrNull(value)) {
                        throw new Error(n + ".fetch minActiveRowVersion property must be a boolean value or null.");
                    }
                    _minActiveRowVersion = value;
                },
                enumerable: true
            },
            "noLock": {
                get: function () { return _noLock; },
                set: function (value) {
                    if (!isBooleanOrNull(value)) {
                        throw new Error(n + ".fetch noLock property must be a boolean value or null.");
                    }
                    _noLock = value;
                },
                enumerable: true
            },
            "order": {
                get: function () { return _order; },
                set: function (value) {
                    if (!isOrder(value)) {
                        throw new Error(n + ".fetch order property must be an Sdk.FetchXml.order value.");
                    }
                    _order = value;
                },
                enumerable: true
            },
            "outputFormat": {
                get: function () { return _outputFormat; },
                set: function (value) {
                    if (!isEnumMemberOrNull(Sdk.FetchXml.OutputFormat, value)) {
                        throw new Error(n + ".fetch outputFormat property must be a " + n + ".OutputFormatType value or null.");
                    }
                    _outputFormat = value;
                },
                enumerable: true
            },
            "page": {
                get: function () { return _page; },
                set: function (value) {
                    if (!isNumberOrNull(value)) {
                        throw new Error(n + ".fetch page property must be a number value or null.");
                    }
                    _page = value;
                },
                enumerable: true
            },
            "pagingCookie": {
                get: function () { return _pagingCookie; },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".fetch pagingCookie property must be a string value or null.");
                    }
                    _pagingCookie = value;
                },
                enumerable: true
            },
            "returnTotalRecordCount": {
                get: function () { return _returnTotalRecordCount; },
                set: function (value) {
                    if (!isBooleanOrNull(value)) {
                        throw new Error(n + ".fetch returnTotalRecordCount property must be a boolean value or null.");
                    }
                    _returnTotalRecordCount = value;
                },
                enumerable: true
            },
            "top": {
                get: function () { return _top; },
                set: function (value) {
                    if (!isNumberOrNull(value)) {
                        throw new Error(n + ".fetch top property must be a number value or null.");
                    }
                    _top = value;
                },
                enumerable: true
            },
            "utcOffset": {
                get: function () { return _utcOffset; },
                set: function (value) {
                    if (!isNumberOrNull(value)) {
                        throw new Error(n + ".fetch utcOffset property must be a number value or null.");
                    }
                    _utcOffset = value;
                },
                enumerable: true
            },
            "version": {
                get: function () { return _version; },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".fetch version property must be a string value or null.");
                    }
                    _version = value;
                },
                enumerable: true
            }

        });
        //Constructor
        if (entity) {
            this.entity = entity;
        }

        return Object.seal(this);
    }
    /** @description Sets the aggregate attribute of the fetch element
    * @param {boolean} aggregate The aggregate value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setAggregate = function (aggregate) {
        this.aggregate = aggregate;
        return this;
    }
    /** @description Sets the count attribute of the fetch element
    * @param {Number} count The count value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setCount = function (count) {
        this.count = count;
        return this;
    }
    /** @description Sets the distinct attribute of the fetch element
    * @param {boolean} distinct The distinct value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setDistinct = function (distinct) {
        this.distinct = distinct;
        return this;
    }
    /** @description Sets the aggregate entity of the fetch element
    * @param {Sdk.FetchXml.entity} entity The entity value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setEntity = function (entity) {
        this.entity = entity;
        return this;
    }
    /** @description Sets the mapping attribute of the fetch element
    * @param {Sdk.FetchXml.Mapping} mapping The mapping value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setMapping = function (mapping) {
        this.mapping = mapping;
        return this;
    }
    /** @description Sets the minActiveRowVersion attribute of the fetch element
    * @param {boolean} minActiveRowVersion The minActiveRowVersion value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setMinActiveRowVersion = function (minActiveRowVersion) {
        this.minActiveRowVersion = minActiveRowVersion;
        return this;
    }
    /** @description Sets the noLock attribute of the fetch element
    * @param {boolean | null} noLock The noLock value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setNoLock = function (noLock) {
        this.noLock = noLock;
        return this;
    }
    /** @description Sets the order attribute of the fetch element
    * @param {Sdk.FetchXml.order} order The order value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setOrder = function (order) {
        this.order = order;
        return this;
    }
    /** @description Sets the outputFormat attribute of the fetch element
    * @param {Sdk.FetchXml.OutputFormat} outputFormat The outputFormat value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setOutputFormat = function (outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    /** @description Sets the page attribute of the fetch element
    * @param {number | null} page The page value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setPage = function (page) {
        this.page = page;
        return this;
    }
    /** @description Sets the pagingCookie attribute of the fetch element
    * @param {string} pagingCookie The pagingCookie value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setPagingCookie = function (pagingCookie) {
        this.pagingCookie = pagingCookie;
        return this;
    }
    /** @description Sets the returnTotalRecordCount attribute of the fetch element
    * @param {boolean | null} returnTotalRecordCount The returnTotalRecordCount value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setReturnTotalRecordCount = function (returnTotalRecordCount) {
        this.returnTotalRecordCount = returnTotalRecordCount;
        return this;
    }
    /** @description Sets the top attribute of the fetch element
    * @param {number} top The top value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setTop = function (top) {
        this.top = top;
        return this;
    }
    /** @description Sets the utcOffset attribute of the fetch element
    * @param {number | null} utcOffset The utcOffset value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setUtcOffset = function (utcOffset) {
        this.utcOffset = utcOffset;
        return this;
    }
    /** @description Sets the version attribute of the fetch element
    * @param {string | null} version The version value to apply to the fetch element
    * @returns {Sdk.FetchXml.fetch}
    */
    this.fetch.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    }
    //Internal use only
    this.fetch.prototype.toXml = function () {
        var root = "<fetch />";
        var doc = new DOMParser().parseFromString(root, "text/xml");
        if (this.version) {
            doc.documentElement.setAttribute("version", this.version)
        }
        if (this.outputFormat) {
            doc.documentElement.setAttribute("output-format", this.outputFormat)
        }
        if (this.mapping) {
            doc.documentElement.setAttribute("mapping", this.mapping)
        }
        if (this.aggregate) {
            doc.documentElement.setAttribute("aggregate", (this.aggregate) ? "true" : "false")
        }
        if (this.count) {
            doc.documentElement.setAttribute("count", this.count)
        }
        if (!isNullOrUndefined(this.distinct)) {
            doc.documentElement.setAttribute("distinct", (this.distinct) ? "true" : "false")
        }
        if (this.entity) {
            doc.documentElement.appendChild(this.entity.toXml(doc));
        }

        if (isBoolean(this.minActiveRowVersion)) {
            doc.documentElement.setAttribute("min-active-row-version", (this.minActiveRowVersion) ? "true" : "false")
        }
        if (isBoolean(this.noLock)) {
            doc.documentElement.setAttribute("no-lock", (this.noLock) ? "true" : "false")
        }
        if (this.order) {
            doc.documentElement.appendChild(this.order.toXml(doc));
        }

        if (this.page) {
            doc.documentElement.setAttribute("page", this.page)
        }
        if (this.pagingCookie) {
            doc.documentElement.setAttribute("paging-cookie", this.pagingCookie) //Does this need special handling?
        }
        if (isBoolean(this.returnTotalRecordCount)) {
            doc.documentElement.setAttribute("returntotalrecordcount", (this.returnTotalRecordCount) ? "true" : "false")
        }
        if (this.top) {
            doc.documentElement.setAttribute("top", this.top)
        }
        if (this.utcOffset) {
            doc.documentElement.setAttribute("utc-offset", this.utcOffset)
        }

        return new XMLSerializer().serializeToString(doc);
    }
    this.fetch.fromXml = fetchFromXml; //A static method
    function fetchFromXml(xml) {
        var doc = new DOMParser().parseFromString(xml, "text/xml");
        var fetchObj = new Sdk.FetchXml.fetch();
        var errorMessage = "The XML string is not a valid fetchXML document";

        if (doc.documentElement.localName == "fetch") {

            parseAttributes(doc.documentElement, fetchObj, fetchSwitch);

            for (var i = 0; i < doc.documentElement.childNodes.length; i++) {

                if (doc.documentElement.childNodes[i].nodeName == "entity") {
                    fetchObj.entity = entityFromXml(doc.documentElement.childNodes[i]);
                }
                if (doc.documentElement.childNodes[i].nodeName == "order") {
                    fetchObj.order = orderFromXml(doc.documentElement.childNodes[i]);
                }
            }

        }
        else {
            throw new Error(errorMessage);
        }

        return fetchObj;

    }
    //switchfunction for fetchFromXml
    function fetchSwitch(fetchObj, name, value) {
        switch (name) {
            case "count":
            case "top":
            case "page":
                fetchObj[name] = parseInt(value, 10);
                break;
            case "utc-offset":
                if (!isNaN(value)) {
                    fetchObj.utcOffset = parseInt(value, 10);
                }
                else {
                    fetchObj.utcOffset = null;
                }
                break;
            case "paging-cookie":
                fetchObj.pagingCookie = value;
                break;
            case "min-active-row-version":
                fetchObj.minActiveRowVersion = (value == "true") ? true : false;
                break;
            case "output-format":
                fetchObj.outputFormat = value;
                break;
            case "returntotalrecordcount":
                fetchObj.returnTotalRecordCount = (value == "true") ? true : false;
                break;
            case "no-lock":
                fetchObj.noLock = (value == "true") ? true : false;
                break;
            case "aggregate": //xs:boolean
            case "distinct":
                fetchObj[name] = (value == "true") ? true : false;
                break;
            default:
                fetchObj[name] = value;
                break;
        }
    }
    function entityFromXml(xml) {
        var entityObj = new Sdk.FetchXml.entity(xml.attributes.getNamedItem("name").nodeValue);
        entityObj.allAttributes = (xml.getElementsByTagName("all-attributes").length == 1);

        for (var i = 0; i < xml.childNodes.length; i++) {

            if (xml.childNodes[i].nodeName == "attribute") {
                entityObj.addAttribute(attributeFromXml(xml.childNodes[i]));
            }
            if (xml.childNodes[i].nodeName == "order") {
                entityObj.addOrder(orderFromXml(xml.childNodes[i]));
            }
            if (xml.childNodes[i].nodeName == "link-entity") {
                entityObj.addLinkEntity(linkEntityFromXml(xml.childNodes[i]));
            }
            if (xml.childNodes[i].nodeName == "filter") {
                entityObj.addFilter(filterFromXml(xml.childNodes[i]));
            }

        }

        return entityObj;
    }
    function orderFromXml(xml) {
        var orderObj = new Sdk.FetchXml.order();
        parseAttributes(xml, orderObj, orderSwitch);
        return orderObj;
    }
    //switchfunction for orderFromXml
    function orderSwitch(orderObj, name, value) {
        switch (name) {
            case "attribute":
                orderObj.attribute = value;
                break;
            case "alias":
                orderObj.alias = value;
                break;
            case "descending":
                orderObj.descending = (value == "true") ? true : false;
                break;
            default:
                break;

        }
    }
    function attributeFromXml(xml) {
        var attObj = new Sdk.FetchXml.attribute(xml.attributes.getNamedItem("name").nodeValue);

        parseAttributes(xml, attObj, attributeSwitch)

        return attObj;
    }
    //switchfunction for attributeFromXml
    function attributeSwitch(attObj, name, value) {
        switch (name) {
            case "build":
            case "alias":
            case "aggregate":
                attObj[name] = value;
                break;
            case "addedby":
                attObj.addedBy = value;
                break;
            case "dategrouping":
                attObj.dateGrouping = value;
                break;
            case "groupby":
                attObj.groupBy = convertFetchBoolType(value);
            case "usertimezone":
                attObj.userTimeZone = convertFetchBoolType(value);
                break;
            default:
                break;

        }
    }
    function linkEntityFromXml(xml) {
        var linkEntityObj = new Sdk.FetchXml.linkEntity(xml.attributes.getNamedItem("name").nodeValue);
        linkEntityObj.allAttributes = (xml.getElementsByTagName("all-attributes").length == 1);

        parseAttributes(xml, linkEntityObj, LinkEntitySwitch);

        for (var i = 0; i < xml.childNodes.length; i++) {

            if (xml.childNodes[i].nodeName == "attribute") {
                linkEntityObj.addAttribute(attributeFromXml(xml.childNodes[i]));
            }

            if (xml.childNodes[i].nodeName == "order") {
                linkEntityObj.addOrder(orderFromXml(xml.childNodes[i]));
            }

            if (xml.childNodes[i].nodeName == "filter") {
                linkEntityObj.addFilter(filterFromXml(xml.childNodes[i]));
            }

            if (xml.childNodes[i].nodeName == "link-entity") {
                linkEntityObj.addLinkEntity(linkEntityFromXml(xml.childNodes[i]));
            }
        }

        return linkEntityObj;
    }
    //switchfunction for linkEntityFromXml
    function LinkEntitySwitch(linkEntityObj, name, value) {
        switch (name) {
            case "to":
            case "from":
            case "alias":
                linkEntityObj[name] = value;
                break;
            case "link-type":
                linkEntityObj.linktype = value;
                break;
            case "visible":
            case "intersect":
                linkEntityObj[name] = (value == "true") ? true : false;
                break;
            default:
                break;
        }
    }
    function filterFromXml(xml) {
        var filterObj = new Sdk.FetchXml.filter();

        parseAttributes(xml, filterObj, filterSwitch);



        for (var i = 0; i < xml.childNodes.length; i++) {

            if (xml.childNodes[i].nodeName == "condition") {
                filterObj.addCondition(conditionFromXml(xml.childNodes[i]));
            }

            if (xml.childNodes[i].nodeName == "filter") {
                filterObj.addFilter(filterFromXml(xml.childNodes[i]));
            }

        }


        return filterObj;
    }
    //switchfunction for filterFromXml
    function filterSwitch(filterObj, name, value) {
        switch (name) {
            case "type":
                filterObj.type = value;
                break;
            case "isquickfindfields":
                filterObj.isQuickFindFields = (value == "true" || value == "1") ? true : false;
                break;
            default:
                break;
        }
    }
    function conditionFromXml(xml) {
        var conditionObj = new Sdk.FetchXml.condition(
            xml.attributes.getNamedItem("attribute").nodeValue,
            xml.attributes.getNamedItem("operator").nodeValue
            );



        parseAttributes(xml, conditionObj, conditionSwitch)

        for (var i = 0; i < xml.childNodes.length; i++) {

            if (xml.childNodes[i].nodeName == "value") {
                conditionObj.addValue(valueFromXml(xml.childNodes[i]));
            }

        }



        return conditionObj;
    }
    //switchfunction for conditionFromXml
    function conditionSwitch(conditionObj, name, value) {
        switch (name) {
            case "column":
            case "entityname":
            case "aggregate":
            case "alias":
            case "uiname":
            case "uitype":
                conditionObj[name] = value;
                break;
            case "rowaggregate":
                conditionObj.rowAggregate = value;
                break;
            case "uihidden":
                conditionObj.uihidden = convertFetchBoolType(value);
                break;
            case "value":
                conditionObj.addValue(value);
                break;
            default:
                break;
        }
    }
    function valueFromXml(xml) {

        var valueObj = new Sdk.FetchXml.value(xml.textContent);
        parseAttributes(xml, valueObj, valueSwitch);

        return valueObj;
    }
    //switch function for valueFromXml
    function valueSwitch(object, name, value) {
        switch (name) {
            case "uiname":
            case "uitype":
                object[name] = value;
                break;
        }
    }
    //Loops through the attributes of a node and applies switch function to set attributes
    function parseAttributes(xml, object, switchFunction) {
        var atts = xml.attributes;
        for (var i = 0; i < atts.length; i++) {
            var name = atts[i].nodeName;
            var value = atts[i].nodeValue;
            switchFunction(object, name, value)
        }
    }
    /** @description Contains the data for a fetchXml entity element.
     * @param {string} name The logical name of the attribute  
     * @param {Array} [attributes] An array of Sdk.FetchXML.attribute
     * @param {Array} [orders]  An array of Sdk.FetchXML.order
     * @param {Array} [linkEntities]   An array of Sdk.FetchXML.linkEntity
     * @param {Array} [filters]  The filter to apply to the entity
     * @property {boolean} allAttributes Gets or sets whether all attributes for the entity should be returned
     * @property {Array} attributes Gets or sets the attributes to be returned by the query
     * @property {Array} orders Gets or sets the orders to be applied to the query
     * @property {Array} linkEntities Gets or sets the linked entities for the query
     * @property {Array} filters Gets or sets the filters for the query
     * @property {string} name Gets or sets logical name of the entity 
     * @returns {Sdk.FetchXml.entity}
     */
    this.entity = function (name, attributes, orders, linkEntities, filters) {
        if (!(isEntity(this)))
        { return new Sdk.FetchXml.entity(name, attributes, orders, linkEntities, filters) }

        var _name;
        var _allAttributes = false;
        var _attributes = [];
        var _orders = [];
        var _filters = [];
        var _linkEntities = [];

        Object.defineProperties(this, {
            "allAttributes": {
                get: function () { return _allAttributes; },
                set: function (value) {
                    if (!isBoolean(value)) {
                        throw new Error(n + ".entity allAttributes property must be a boolean value.");
                    }
                    _allAttributes = value;
                },
                enumerable: true
            },
            "attributes": {
                get: function () { return _attributes; },
                set: function (value) {
                    if (!isAttributeArrayOrNull(value)) {
                        throw new Error(n + ".entity attributes property must be an array of " + n + ".attribute or null.");
                    }
                    if (isNull(value))
                    { _attributes = []; }
                    else {
                        _attributes = value;
                    }

                },
                enumerable: true
            },
            "orders": {
                get: function () { return _orders; },
                set: function (value) {
                    if (!isOrderArrayOrNull(value)) {
                        throw new Error(n + ".entity orders property must be an array of " + n + ".order or null.");
                    }
                    if (isNull(value)) {
                        _orders = [];
                    }
                    else {
                        _orders = value;
                    }

                },
                enumerable: true
            },
            "linkEntities": {
                get: function () { return _linkEntities; },
                set: function (value) {
                    if (!isLinkEntityArrayOrNull(value)) {
                        throw new Error(n + ".entity linkEntities property must be an array of " + n + ".linkEntity or null.");
                    }
                    if (isNull(value)) {
                        _linkEntities = [];
                    }
                    else {
                        _linkEntities = value;
                    }

                },
                enumerable: true
            },
            "filters": {
                get: function () { return _filters; },
                set: function (value) {
                    if (!isFilterArrayOrNull(value)) {
                        throw new Error(n + ".entity filter property must be an array of " + n + ".filter or null.");
                    }
                    if (isNull(value)) {
                        _filters = [];
                    }
                    else {
                        _filters = value;
                    }

                },
                enumerable: true
            },
            "name": {
                get: function () { return _name; },
                set: function (value) {
                    if (!isString(value)) {
                        throw new Error(n + ".entity name property must be an string.");
                    }
                    _name = value;
                },
                enumerable: true
            }
        });
        //Constructor
        if (name) {
            this.name = name;
        }
        else {
            throw new Error(n + ".entity name constructor parameter is required.");
        }
        if (attributes) {
            this.attributes = attributes;
        }
        if (orders) {
            this.orders = orders;
        }
        if (linkEntities) {
            this.linkEntities = linkEntities;
        }
        if (filters) {
            this.filters = filters;
        }

        return Object.seal(this);
    }
    /** @description Adds an attribute to the attribute collection
    * @param {Sdk.FetchXml.attribute | string} attributeOrAttributeName the attribute or attribute name to add
    * @returns {Sdk.FetchXml.entity}
    */
    this.entity.prototype.addAttribute = function (attributeOrAttributeName) {
        if (isString(attributeOrAttributeName)) {

            // Some saved queries have duplicate attributes defined, so this is a bit more strict than it has to be.
            var exists = false;
            this.attributes.forEach(function (a) {
                if (a.name == attributeOrAttributeName) {
                    exists = true;
                }
            });
            if (!exists) {
                this.attributes.push(new Sdk.FetchXml.attribute(attributeOrAttributeName))
            }


            return this;
        }
        if (isAttribute(attributeOrAttributeName)) {
            var exists = false;
            this.attributes.forEach(function (a) {
                if (a.name == attributeOrAttributeName.name) {
                    exists = true;
                }
            });
            if (!exists) {
                this.attributes.push(attributeOrAttributeName);
            }
        }
        else {
            throw new Error(n + ".entity addAttribute method attributeOrAttributeName parameter must be an " + n + ".attribute or a string value.");
        }
        return this;
    }
    /** @description Removes an attribute from the attributes collection by name
    * @param {string} attributeName The name of the attribute to remove
    * @returns {Sdk.FetchXml.entity}
    */
    this.entity.prototype.removeAttributeByName = function (attributeName) {
        removeCollectionValueByProperty(this.attributes, "name", attributeName)
    }
    /** @description Removes an attribute from the attributes collection by reference
    * @param {Sdk.FetchXml.attribute} attribute The attribute to remove
    * @returns {Sdk.FetchXml.entity}
    */
    this.entity.prototype.removeAttributeByRef = function (attribute) {
        removeCollectionValueByRef(this.attributes, attribute);
    }
    /** @description Removes an attribute from the attributes collection
    * @param {Sdk.FetchXml.attribute} attribute The attribute to remove
    * @returns {Sdk.FetchXml.entity}
    */
    this.entity.prototype.removeAttribute = function (attribute) {
        removeCollectionValue(this.attributes, attribute);
    }
    /** @description Adds an order to the orders collection
    * @param {Sdk.FetchXml.order | string} orderOrAttribute The order to add to the attributes collection or the Attribute property of a new order to create
    * @param {boolean} descending Whether the order is descending. True if descending, otherwise false
    * @param {string} alias The alias to set for the order
    * @returns {Sdk.FetchXml.entity}
    */
    this.entity.prototype.addOrder = function (orderOrAttribute, descending, alias) {
        if (isOrder(orderOrAttribute)) {
            this.orders.push(orderOrAttribute);
            return this;
        }
        if (isString(orderOrAttribute)) {
            this.orders.push(new Sdk.FetchXml.order(orderOrAttribute, descending, alias));
        }
        else {
            throw new Error(n + ".entity addOrder method orderOrAttribute parameter must be a " + n + ".order value or a string.");
        }
        return this;
    }
    /** @description Removes a order from the orders collection by reference
    * @param {Sdk.FetchXml.order} order The order to remove from the orders collection
    * @returns {Sdk.FetchXml.entity}
    */
    this.entity.prototype.removeOrderByRef = function (order) {
        if (!isOrder(order)) {
            throw new Error(n + ".entity removeOrderByRef method order parameter must be an " + n + ".order.")
        }
        removeCollectionValueByRef(this.orders, order);
        return this;
    }
    /** @description Removes a order from the orders collection by value
    * @param {Sdk.FetchXml.order} order The order to remove from the orders collection
    * @returns {Sdk.FetchXml.entity}
    */
    this.entity.prototype.removeOrder = function (order) {
        if (!isOrder(order)) {
            throw new Error(n + ".entity removeOrder method order parameter must be an " + n + ".order.")
        }
        removeCollectionValue(this.orders, order);
        return this;
    }
    /** @description Sets the name property of the entity element
    * @param {string} name The name value to apply to the entity
    * @returns {Sdk.FetchXml.entity}
    */
    this.entity.prototype.setName = function (name) {
        this.name = name;
        return this;
    }
    /** @description Sets the allAttributes property of the entity 
    * @param {boolean} [allAttributes] The allAttributes value to apply to the entity. The default is true;
    * @returns {Sdk.FetchXml.entity}
    */
    this.entity.prototype.setAllAttributes = function (allAttributes) {
        if (isBoolean(allAttributes)) {
            this.allAttributes = allAttributes;
        }
        else {
            if (isNullOrUndefined(allAttributes)) {
                this.allAttributes = true;
            }
            else {
                throw new Error(n + ".entity setAllAttributes method allAttributes parameter must be a boolean value.");
            }
        }

        return this;
    }
    /** @description Adds an linkEntity to the linkEntities collection
    * @param {Sdk.FetchXml.linkEntity} linkEntity The linkEntity to add to the entity
    * @returns {Sdk.FetchXml.entity}
    */
    this.entity.prototype.addLinkEntity = function (linkEntity) {
        if (isLinkEntity(linkEntity)) {
            this.linkEntities.push(linkEntity);
            return this;
        }
        else {
            throw new Error(n + ".entity addLinkEntity method linkEntity parameter must be a " + n + ".linkEntity value.");
        }
        return this;
    }
    /** @description Removes a linkEntity from the linkEntities collection by reference
        * @param {Sdk.FetchXml.linkEntity} linkEntity The linkEntity to remove from the linkEntities collection
        * @returns {Sdk.FetchXml.entity}
        */
    this.entity.prototype.removeLinkEntityByRef = function (linkEntity) {
        if (!isLinkEntity(linkEntity)) {
            throw new Error(n + ".entity removeLinkEntityByRef method linkEntity parameter must be an " + n + ".linkEntity.")
        }
        removeCollectionValueByRef(this.linkEntities, linkEntity);
        return this;
    }
    /** @description Removes a linkEntity from the linkEntities collection by value
        * @param {Sdk.FetchXml.linkEntity} linkEntity The linkEntity to remove from the linkEntities collection
        * @returns {Sdk.FetchXml.entity}
        */
    this.entity.prototype.removeLinkEntity = function (linkEntity) {
        if (!isLinkEntity(linkEntity)) {
            throw new Error(n + ".entity removeLinkEntity method linkEntity parameter must be an " + n + ".linkEntity.")
        }
        removeCollectionValue(this.linkEntities, linkEntity);
        return this;
    }
    /** @description Adds an filter to the filters collection
   * @param {Sdk.FetchXml.filter} filter The filter to add to the entity
   * @returns {Sdk.FetchXml.entity}
   */
    this.entity.prototype.addFilter = function (filter) {
        if (isFilter(filter)) {
            this.filters.push(filter);
            return this;
        }
        else {
            throw new Error(n + ".entity addFilter method filter parameter must be a " + n + ".filter value.");
        }
        return this;
    }
    /** @description Removes a filter from the filters collection by reference
    * @param {Sdk.FetchXml.filter} filter The filter to remove from the filters collection
    * @returns {Sdk.FetchXml.entity}
    */
    this.entity.prototype.removeFilterByRef = function (filter) {
        if (!isFilter(filter)) {
            throw new Error(n + ".entity removeFilterByRef method filter parameter must be an " + n + ".filter.")
        }
        removeCollectionValueByRef(this.filters, filter);
        return this;
    }
    /** @description Removes a filter from the filters collection by value
    * @param {Sdk.FetchXml.filter} filter The filter to remove from the filters collection
    * @returns {Sdk.FetchXml.entity}
    */
    this.entity.prototype.removeFilter = function (filter) {
        if (!isFilter(filter)) {
            throw new Error(n + ".entity removeFilter method filter parameter must be an " + n + ".filter.")
        }
        removeCollectionValue(this.filters, filter);
        return this;
    }
    //Internal use only
    this.entity.prototype.toXml = function (doc) {
        var entityNode = doc.createElement("entity");
        if (this.allAttributes) {
            entityNode.appendChild(doc.createElement("all-attributes"));
        }
        else {
            this.attributes.forEach(function (a, i) {
                entityNode.appendChild(a.toXml(doc));
            })
        }
        this.orders.forEach(function (o, i) {
            entityNode.appendChild(o.toXml(doc));
        })

        this.linkEntities.forEach(function (l, i) {
            entityNode.appendChild(l.toXml(doc));
        })

        this.filters.forEach(function (f, i) {
            entityNode.appendChild(f.toXml(doc));
        })

        //Is required so no need to check
        entityNode.setAttribute("name", this.name);

        return entityNode;

    }
    /** @description Contains the data for a fetchXml attribute element.
     * @param {string} name The logical name of the attribute  
     * @property {string} name Gets or sets logical name of the attribute
     * @property {Sdk.FetchXml.Build} build Gets or sets the build of the attribute
     * @property {string} addedBy Gets or sets the addedBy property of the attribute   
     * @property {string} alias Gets or sets the alias property of the attribute  
     * @property {Sdk.FetchXml.Aggregate} aggregate Gets or sets the aggregate property of the attribute  
     * @property {boolean} groupBy Gets or sets the groupBy property of the attribute  
     * @property {Sdk.FetchXml.DateGrouping} dateGrouping Gets or sets the dateGrouping property of the attribute  
     * @property {boolean} userTimeZone Gets or sets the userTimeZone property of the attribute  
     * @returns {Sdk.FetchXml.attribute}
     */
    this.attribute = function (name) {
        if (!(isAttribute(this)))
        { return new Sdk.FetchXml.attribute(name) }

        var _name, _build, _addedBy, _alias, _aggregate, _dateGrouping;
        var _groupBy = null;
        var _userTimeZone = null;

        Object.defineProperties(this, {
            "name": {
                get: function () {
                    return _name;
                },
                set: function (value) {
                    if (!isString(value)) {
                        throw new Error(n + ".attribute name property must be an string.");
                    }
                    _name = value;
                },
                enumerable: true
            },
            "build": {
                get: function () {
                    return _build;
                },
                set: function (value) {
                    if (!isEnumMemberOrNull(Sdk.FetchXml.Build, value)) {
                        throw new Error(n + ".attribute build property must be an " + n + ".Build value.");
                    }
                    _build = value;
                },
                enumerable: true
            },
            "addedBy": {
                get: function () {
                    return _addedBy;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".attribute addedBy property must be an string value or null.");
                    }
                    _addedBy = value;
                },
                enumerable: true
            },
            "alias": {
                get: function () {
                    return _alias;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".attribute alias property must be an string value or null.");
                    }
                    _alias = value;
                },
                enumerable: true
            },
            "aggregate": {
                get: function () {
                    return _aggregate;
                },
                set: function (value) {
                    if (!isEnumMemberOrNull(Sdk.FetchXml.Aggregate, value)) {
                        throw new Error(n + ".attribute aggregate property must be an " + n + ".Aggregate value.");
                    }
                    _aggregate = value;
                },
                enumerable: true
            },
            "groupBy": {
                get: function () {
                    return _groupBy;
                },
                set: function (value) {
                    if (!isBooleanOrNull(value)) {
                        throw new Error(n + ".attribute groupBy property must be an boolean value or null.");
                    }
                    _groupBy = value;
                },
                enumerable: true
            },
            "dateGrouping": {
                get: function () {
                    return _dateGrouping;
                },
                set: function (value) {
                    if (!isEnumMemberOrNull(Sdk.FetchXml.DateGrouping, value)) {
                        throw new Error(n + ".attribute dateGrouping property must be an " + n + ".DateGrouping value.");
                    }
                    _dateGrouping = value;
                },
                enumerable: true
            },
            "userTimeZone": {
                get: function () {
                    return _userTimeZone;
                },
                set: function (value) {
                    if (!isBooleanOrNull(value)) {
                        throw new Error(n + ".attribute userTimeZone property must be an boolean value or null.");
                    }
                    _userTimeZone = value;
                },
                enumerable: true
            }

        });
        //Constructor
        if (name) {
            this.name = name;
        }
        else {
            throw new Error(n + "attribute name constructor parameter is required.");
        }
        return Object.seal(this);
    }
    /** @description Sets the name property of the attribute attribute
    * @param {string} name The name value to apply to the attribute
    * @returns {Sdk.FetchXml.attribute}
    */
    this.attribute.prototype.setName = function (name) {
        this.name = name;
        return this;
    }
    /** @description Sets the build property of the build attribute
    * @param {Sdk.FetchXml.Build | null} build The build value to apply to the attribute
    * @returns {Sdk.FetchXml.attribute}
    */
    this.attribute.prototype.setBuild = function (build) {
        this.build = build;
        return this;
    }
    /** @description Sets the addedBy property of the attribute attribute
    * @param {string | null} addedBy The addedBy value to apply to the attribute
    * @returns {Sdk.FetchXml.attribute}
    */
    this.attribute.prototype.setAddedBy = function (addedBy) {
        this.addedBy = addedBy;
        return this;
    }
    /** @description Sets the alias property of the attribute attribute
    * @param {string} alias The alias value to apply to the attribute
    * @returns {Sdk.FetchXml.attribute}
    */
    this.attribute.prototype.setAlias = function (alias) {
        this.alias = alias;
        return this;
    }
    /** @description Sets the aggregate property of the attribute attribute
    * @param {Sdk.FetchXml.Aggregate | null } aggregate The aggregate value to apply to the attribute
    * @returns {Sdk.FetchXml.attribute}
    */
    this.attribute.prototype.setAggregate = function (aggregate) {
        this.aggregate = aggregate;
        return this;
    }
    /** @description Sets the groupBy property of the attribute attribute
    * @param {boolean | null} groupBy The groupBy value to apply to the attribute
    * @returns {Sdk.FetchXml.attribute}
    */
    this.attribute.prototype.setGroupBy = function (groupBy) {
        this.groupBy = groupBy;
        return this;
    }
    /** @description Sets the dateGrouping property of the attribute attribute
    * @param {Sdk.FetchXml.DateGrouping | null} dateGrouping The dateGrouping value to apply to the attribute
    * @returns {Sdk.FetchXml.attribute}
    */
    this.attribute.prototype.setDateGrouping = function (dateGrouping) {
        this.dateGrouping = dateGrouping;
        return this;
    }
    /** @description Sets the userTimeZone property of the attribute attribute
    * @param {boolean | null} userTimeZone The userTimeZone value to apply to the attribute
    * @returns {Sdk.FetchXml.attribute}
    */
    this.attribute.prototype.setUserTimeZone = function (userTimeZone) {
        this.userTimeZone = userTimeZone;
        return this;
    }
    //Internal use only
    this.attribute.prototype.toXml = function (doc) {
        var aNode = doc.createElement("attribute");
        aNode.setAttribute("name", this.name);
        if (this.build) {
            aNode.setAttribute("build", this.build);
        }
        if (this.addedBy) {
            aNode.setAttribute("addedby", this.addedBy);
        }
        if (this.alias) {
            aNode.setAttribute("alias", this.alias);
        }
        if (this.aggregate) {
            aNode.setAttribute("aggregate", this.aggregate);
        }
        if (isBoolean(this.groupBy)) {
            aNode.setAttribute("groupby", this.groupBy);
        }
        if (this.dateGrouping) {
            aNode.setAttribute("dategrouping", this.dateGrouping);
        }
        if (isBoolean(this.userTimeZone)) {
            aNode.setAttribute("usertimezone", this.userTimeZone);
        }
        return aNode;

    }
    /** @description Contains the data for a fetchXml order element.
     * @param {string} attribute The logical name of the attribute
     * @param {boolean} [descending] Whether the order is decending. Default is false
     * @param {string} [alias] The alias to apply to the order
     * @property {string} attribute Gets or sets logical name of the attribute
     * @property {boolean} descending Gets or sets whether the order is descending. Default is false
     * @property {string} alias Gets or sets the alias property of the order   
     * @returns {Sdk.FetchXml.order}
     */
    this.order = function (attribute, descending, alias) {
        if (!(isOrder(this)))
        { return new Sdk.FetchXml.order(attribute, descending, alias) }

        var _attribute, _alias;
        var _descending = false; //default
        Object.defineProperties(this, {
            "hash": {
                get: function () {
                    var s = "".concat(
                      (_attribute ? _attribute : ""),
                      (_alias ? _alias : ""),
                      _descending);
                    return s.hashCode();
                },
                enumerable: false
            },
            "attribute": {
                get: function () {
                    return _attribute;
                },
                set: function (value) {
                    if (!isString(value)) {
                        throw new Error(n + ".order attribute property must be an string.");
                    }
                    _attribute = value;
                },
                enumerable: true
            },
            "alias": {
                get: function () {
                    return _alias;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".order alias property must be an string value or null.");
                    }
                    _alias = value;
                },
                enumerable: true
            },
            "descending": {
                get: function () {
                    return _descending;
                },
                set: function (value) {
                    if (!isBoolean(value)) {
                        throw new Error(n + ".order descending property must be an boolean value.");
                    }
                    _descending = value;
                },
                enumerable: true
            }

        });

        //Constructor
        if (attribute) {
            this.attribute = attribute;
        }
        if (descending) {
            this.descending = descending;
        }
        if (alias) {
            this.alias = alias;
        }
        return Object.seal(this);
    }
    /** @description Sets the attribute property of the order attribute
    * @param {string} attribute The attribute value to apply to the order
    * @returns {Sdk.FetchXml.order}
    */
    this.order.prototype.setAttribute = function (attribute) {
        this.attribute = attribute;
        return this;
    }
    /** @description Sets the alias property of the order attribute
    * @param {string} alias The alias value to apply to the order
    * @returns {Sdk.FetchXml.order}
    */
    this.order.prototype.setAlias = function (alias) {
        this.alias = alias;
        return this;
    }
    /** @description Sets the descending property of the order attribute
    * @param {boolean | null} descending The descending value to apply to the order
    * @returns {Sdk.FetchXml.order}
    */
    this.order.prototype.setDescending = function (descending) {
        this.descending = descending;
        return this;
    }
    //Internal use only
    this.order.prototype.toXml = function (doc) {
        var orderNode = doc.createElement("order");
        if (this.attribute) {
            orderNode.setAttribute("attribute", this.attribute)
        }
        if (this.alias) {
            orderNode.setAttribute("alias", this.alias)
        }
        if (!isNullOrUndefined(this.descending)) {
            orderNode.setAttribute("descending", (this.descending) ? "true" : "false")
        }
        return orderNode;

    }
    /** @description Contains the data for a fetchXml link-entity element.
     * @param {string} name The logical name of the entity
     * @param {string} [from] The from property of the linkEntity
     * @param {string} [to] The to property of the linkEntity
     * @param {string} [linktype] The linktype property of the linkEntity
     * @param {string} [alias] The alias property of the linkEntity
     * @property {string} name Gets or sets the name property of the linkEntity
     * @property {string} alias Gets or sets the alias property of the linkEntity
     * @property {string} from Gets or sets the from property of the linkEntity
     * @property {boolean | null} intersect Gets or sets the intersect property of the linkEntity
     * @property {string} linktype Gets or sets the linktype property of the linkEntity
     * @property {string} to Gets or sets the to property of the linkEntity
     * @property {boolean | null} visible Gets or sets the visible property of the linkEntity
     * @property {boolean} allAttributes Gets or sets the allAttributes property of the linkEntity
     * @property {Array} attributes Gets or sets the array of Sdk.FetchXml.attribute to apply to the filter
     * @property {Array} orders Gets or sets the array of Sdk.FetchXml.order to apply to the filter
     * @property {Sdk.FetchXml.filter} filter Gets or sets the filter to apply to the linkEntity
     * @returns {Sdk.FetchXml.linkEntity}
     */
    this.linkEntity = function (name, from, to, linktype, alias) {
        if (!(isLinkEntity(this)))
        { return new Sdk.FetchXml.linkEntity(name, from, to, linktype, alias) }

        var _alias, _from, _linktype, _name, _to;
        var _intersect = null;
        var _visible = null;
        var _allAttributes = null;
        var _attributes = [];
        var _orders = [];
        var _linkEntities = [];
        var _filters = [];

        Object.defineProperties(this, {
            "hash": {
                get: function () {
                    var s = _name.concat(
                      (_alias ? _alias : ""),
                      (_from ? _from : ""),
                      (isNullOrUndefined(_intersect) ? "" : _intersect),
                      (_linktype ? _linktype : ""),
                      (_to ? _to : ""),
                      (isNullOrUndefined(_visible) ? "" : _visible),
                      (isNullOrUndefined(_allAttributes) ? "" : _allAttributes),
                      (getCollectionHash(_attributes)),
                      (getCollectionHash(_orders)),
                      (getCollectionHash(_linkEntities)),
                      (getCollectionHash(_filters))
                      );
                    return s.hashCode();
                },
                enumerable: false
            },
            "alias": {
                get: function () {
                    return _alias;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".linkEntity alias property must be a string value or null.");
                    }
                    _alias = value;
                },
                enumerable: true
            },
            "from": {
                get: function () {
                    return _from;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".linkEntity from property must be a string value or null.");
                    }
                    _from = value;
                },
                enumerable: true
            },
            "intersect": {
                get: function () {
                    return _intersect;
                },
                set: function (value) {
                    if (!isBooleanOrNull(value)) {
                        throw new Error(n + ".linkEntity intersect property must be a string value or null.");
                    }
                    _intersect = value;
                },
                enumerable: true
            },
            "linktype": {
                get: function () {
                    return _linktype;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".linkEntity linktype property must be a string value or null.");
                    }
                    _linktype = value;
                },
                enumerable: true
            },
            "name": {
                get: function () {
                    return _name;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".linkEntity name property must be a string value or null.");
                    }
                    _name = value;
                },
                enumerable: true
            },
            "to": {
                get: function () {
                    return _to;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".linkEntity to property must be a string value or null.");
                    }
                    _to = value;
                },
                enumerable: true
            },
            "visible": {
                get: function () {
                    return _visible;
                },
                set: function (value) {
                    if (!isBooleanOrNull(value)) {
                        throw new Error(n + ".linkEntity visible property must be a boolean value or null.");
                    }
                    _visible = value;
                },
                enumerable: true
            },
            "allAttributes": {
                get: function () {
                    return _allAttributes;
                },
                set: function (value) {
                    if (!isBooleanOrNull(value)) {
                        throw new Error(n + ".linkEntity allAttributes property must be a boolean value or null.");
                    }
                    _allAttributes = value;
                },
                enumerable: true
            },
            "attributes": {
                get: function () {
                    return _attributes;
                },
                set: function (value) {
                    if (!isAttributeArrayOrNull(value)) {
                        throw new Error(n + ".linkEntity attributes property must be an array of " + n + ".attribute or null.");
                    }
                    if (isNull(value)) {
                        _attributes = [];
                    } else {
                        _attributes = value;
                    }

                },
                enumerable: true
            },
            "orders": {
                get: function () {
                    return _orders;
                },
                set: function (value) {
                    if (!isOrderArrayOrNull(value)) {
                        throw new Error(n + ".linkEntity orders property must be an array of " + n + ".order or null.");
                    }
                    if (isNull(value)) {
                        _orders = [];
                    } else {
                        _orders = value;
                    }

                },
                enumerable: true
            },
            "linkEntities": {
                get: function () { return _linkEntities; },
                set: function (value) {
                    if (!isLinkEntityArrayOrNull(value)) {
                        throw new Error(n + ".linkEntity linkEntities property must be an array of " + n + ".linkEntity or null.");
                    }
                    if (isNull(value)) {
                        _linkEntities = [];
                    }
                    else {
                        _linkEntities = value;
                    }

                },
                enumerable: true
            },
            "filters": {
                get: function () {
                    return _filters;
                },
                set: function (value) {
                    if (!isFilterArrayOrNull(value)) {
                        throw new Error(n + ".linkEntity filters property must be an array of " + n + ".filter or null.");
                    }
                    if (isNull(value)) {
                        _filters = [];
                    }
                    else {
                        _filters = value;
                    }

                },
                enumerable: true
            }
        });

        //Constructor
        if (name) {
            this.name = name;
        }
        else {
            throw new Error(n + ".linkEntity constructor name parameter is required.");
        }
        if (from) {
            this.from = from;
        }
        if (linktype) {
            this.linktype = linktype;
        }
        if (alias) {
            this.alias = alias;
        }
        return Object.seal(this);
    }
    /** @description Sets the alias property of the linkEntity attribute
    * @param {string} alias The alias value to apply to the linkEntity
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.setAlias = function (alias) {
        this.alias = alias;
        return this;
    }
    /** @description Sets the from property of the linkEntity attribute
    * @param {string} from The from value to apply to the linkEntity
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.setFrom = function (from) {
        this.from = from;
        return this;
    }
    /** @description Sets the intersect property of the linkEntity attribute
    * @param {boolean | null} intersect The intersect value to apply to the linkEntity
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.setIntersect = function (intersect) {
        this.intersect = intersect;
        return this;
    }
    /** @description Sets the name property of the linkEntity attribute
    * @param {string} name The name value to apply to the linkEntity
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.setName = function (name) {
        this.name = name;
        return this;
    }
    /** @description Sets the to property of the linkEntity attribute
    * @param {string} to The to value to apply to the linkEntity
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.setTo = function (to) {
        this.to = to;
        return this;
    }
    /** @description Sets the visible property of the linkEntity attribute
    * @param {boolean | null} visible The visible value to apply to the linkEntity
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.setVisible = function (visible) {
        this.visible = visible;
        return this;
    }
    /** @description Sets the allAttributes property of the linkEntity attribute
    * @param {boolean} allAttributes The allAttributes value to apply to the linkEntity
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.setAllAttributes = function (allAttributes) {
        this.allAttributes = allAttributes;
        return this;
    }
    /** @description Adds an linkEntity to the linkEntities collection
* @param {Sdk.FetchXml.linkEntity} linkEntity The linkEntity to add to the linkEntities collection
* @returns {Sdk.FetchXml.linkEntity}
*/
    this.linkEntity.prototype.addLinkEntity = function (linkEntity) {
        if (isLinkEntity(linkEntity)) {
            this.linkEntities.push(linkEntity);
            return this;
        }
        throw new Error(n + ".linkEntity addLinkEntity method linkEntity parameter must be a " + n + ".linkEntity value.")

        return this;
    }
    /** @description Removes a linkEntity from the linkEntities collection by reference
    * @param {Sdk.FetchXml.linkEntity} linkEntity The linkEntity to remove from the linkEntities collection
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.removeLinkEntityByRef = function (linkEntity) {
        if (!isLinkEntity(linkEntity)) {
            throw new Error(n + ".linkEntity removeLinkEntityByRef method linkEntity parameter must be an " + n + ".linkEntity.")
        }
        removeCollectionValueByRef(this.linkEntities, linkEntity);

        return this;
    }
    /** @description Removes a linkEntity from the linkEntities collection by value
    * @param {Sdk.FetchXml.linkEntity} linkEntity The linkEntity to remove from the linkEntities collection
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.removeLinkEntity = function (linkEntity) {
        if (!isLinkEntity(linkEntity)) {
            throw new Error(n + ".linkEntity removeLinkEntity method linkEntity parameter must be an " + n + ".linkEntity.")
        }
        removeCollectionValue(this.linkEntities, linkEntity);

        return this;
    }
    /** @description Adds an attribute to the attributes collection
    * @param {Sdk.FetchXml.attribute | string} attribute The attribute to add to the attributes collectio
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.addAttribute = function (attribute) {
        if (isAttribute(attribute)) {
            this.attributes.push(attribute);
            return this;
        }
        if (isString(attribute)) {
            this.attributes.push(new Sdk.FetchXml.attribute(attribute));
            return this;
        }
        throw new Error(n + ".linkEntity addAttribute method attribute parameter must be a " + n + ".attribute value or a string.")

        return this;
    }
    /** @description Removes a attribute from the attributes collection by reference
    * @param {Sdk.FetchXml.attribute} attribute The attribute to remove from the attributes collection
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.removeAttributeByRef = function (attribute) {
        if (!isAttribute(attribute)) {
            throw new Error(n + ".linkEntity removeAttributeByRef method attribute parameter must be an " + n + ".attribute.")
        }
        removeCollectionValueByRef(this.attributes, attribute);

        return this;
    }
    /** @description Removes a attribute from the attributes collection by value
    * @param {Sdk.FetchXml.attribute} attribute The attribute to remove from the attributes collection
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.removeAttribute = function (attribute) {
        if (!isAttribute(attribute)) {
            throw new Error(n + ".linkEntity removeAttribute method attribute parameter must be an " + n + ".attribute.")
        }
        removeCollectionValue(this.attributes, attribute);

        return this;
    }
    /** @description Removes a attribute from the attributes collection by name
    * @param {string} attributeName Name of the attribute to remove from the attributes collection
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.removeAttributeByName = function (attributeName) {
        if (!isString(attributeName)) {
            throw new Error(n + ".linkEntity removeAttributeByName method attributeName parameter must be a string.")
        }
        removeCollectionValueByProperty(this.attributes, "name", attributeName)
        return this;
    }
    /** @description Adds an order to the orders collection
    * @param {Sdk.FetchXml.order | string} orderOrAttribute The order to add to the attributes collection or the Attribute property of a new order to create
    * @param {boolean} descending Whether the order is descending. True if descending, otherwise false
    * @param {string} alias The alias to set for the order
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.addOrder = function (orderOrAttribute, descending, alias) {
        if (isOrder(orderOrAttribute)) {
            this.orders.push(orderOrAttribute);
            return this;
        }
        if (isString(orderOrAttribute)) {
            this.orders.push(new Sdk.FetchXml.order(orderOrAttribute, descending, alias));
            return this;
        }
        throw new Error(n + ".linkEntity addOrder method orderOrAttribute parameter must be a " + n + ".order value or a string.")

        return this;
    }
    /** @description Removes a order from the orders collection by reference
    * @param {Sdk.FetchXml.order} order The order to remove from the orders collection
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.removeOrderByRef = function (order) {
        if (!isOrder(order)) {
            throw new Error(n + ".linkEntity removeOrderByRef method order parameter must be an " + n + ".order.")
        }
        removeCollectionValueByRef(this.orders, order);
        return this;
    }
    /** @description Removes a order from the orders collection by value
    * @param {Sdk.FetchXml.order} order The order to remove from the orders collection
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.removeOrder = function (order) {
        if (!isOrder(order)) {
            throw new Error(n + ".linkEntity removeOrder method order parameter must be an " + n + ".order.")
        }
        removeCollectionValue(this.orders, order);
        return this;
    }
    /** @description Adds an filter to the filters collection
* @param {Sdk.FetchXml.filter} filter The filter to add to the filters collection
* @returns {Sdk.FetchXml.linkEntity}
*/
    this.linkEntity.prototype.addFilter = function (filter) {
        if (isFilter(filter)) {
            this.filters.push(filter);
            return this;
        }

        throw new Error(n + ".linkEntity addFilter method filter parameter must be a " + n + ".filter value.")

        return this;
    }
    /** @description Removes a filter from the filters collection by reference
    * @param {Sdk.FetchXml.filter} filter The filter to remove from the filters collection
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.removeFilterByRef = function (filter) {
        if (!isFilter(filter)) {
            throw new Error(n + ".linkEntity removeFilterByRef method filter parameter must be an " + n + ".filter.")
        }
        removeCollectionValueByRef(this.filters, filter);

        return this;
    }
    /** @description Removes a filter from the filters collection by value
    * @param {Sdk.FetchXml.filter} filter The filter to remove from the filters collection
    * @returns {Sdk.FetchXml.linkEntity}
    */
    this.linkEntity.prototype.removeFilter = function (filter) {
        if (!isFilter(filter)) {
            throw new Error(n + ".linkEntity removeFilter method filter parameter must be an " + n + ".filter.")
        }
        removeCollectionValue(this.filters, filter);

        return this;
    }
    //Internal use only
    this.linkEntity.prototype.toXml = function (doc) {
        var leNode = doc.createElement("link-entity");
        if (this.alias) {
            leNode.setAttribute("alias", this.alias)
        }
        if (this.allAttributes) {
            leNode.appendChild(doc.createElement("all-attributes"));
        }
        if (this.from) {
            leNode.setAttribute("from", this.from)
        }
        if (isBoolean(this.intersect)) {
            leNode.setAttribute("intersect", this.intersect)
        }
        if (this.linktype) {
            leNode.setAttribute("link-type", this.linktype)
        }
        if (this.name) {
            leNode.setAttribute("name", this.name)
        }
        if (this.to) {
            leNode.setAttribute("to", this.to)
        }
        if (isBoolean(this.visible)) {
            leNode.setAttribute("visible", (this.visible) ? "true" : "false")
        }
        this.attributes.forEach(function (a) {
            leNode.appendChild(a.toXml(doc));
        })
        this.orders.forEach(function (o) {
            leNode.appendChild(o.toXml(doc));
        })
        this.linkEntities.forEach(function (l) {
            leNode.appendChild(l.toXml(doc));
        })
        this.filters.forEach(function (f) {
            leNode.appendChild(f.toXml(doc));
        })

        return leNode;
    }
    /** @description Contains the data for a fetchXml filter element.
     * @param {Sdk.FetchXml.FilterType} [type] The type of filter: 'and' or 'or'. Default is 'and'
     * @param {Array} [conditions] An array of Sdk.FetchXml.condition to apply to the filter
     * @param {Array} [filters] An array of Sdk.FetchXml.filter to apply to the filter
     * @property {Array} conditions Gets or sets the array of Sdk.FetchXml.condition to apply in the filter
     * @property {Array} filters Gets or sets the array of Sdk.FetchXml.filter to apply to the filter
     * @property {Sdk.FetchXml.FilterType} type Gets or sets the type of filter.
     * @property {boolean} isQuickFindFields Gets or sets the isQuickFindFields property of the filter
     * @returns {Sdk.FetchXml.filter}
     */
    this.filter = function (type, conditions, filters) {
        if (!(isFilter(this)))
        { return new Sdk.FetchXml.filter(type, conditions, filters) }

        var _isquickfindfields = null;
        var _type = Sdk.FetchXml.FilterType.And; //default
        var _conditions = [];
        var _filters = [];

        Object.defineProperties(this, {
            "hash": {
                get: function () {
                    var s = _type.concat(
                      (getCollectionHash(_conditions)),
                      (getCollectionHash(_filters)),
                     (isNullOrUndefined(_isquickfindfields) ? "" : _isquickfindfields)
                      );
                    return s.hashCode();
                },
                enumerable: false
            },
            "conditions": {
                get: function () {
                    return _conditions;
                },
                set: function (value) {
                    if (!isConditionArrayOrNull(value)) {
                        throw new Error(n + ".filter conditions property must be an array of " + n + ".condition values or null.");
                    }
                    if (isNull(value)) {
                        _conditions = [];
                    }
                    else {
                        _conditions = value;
                    }


                },
                enumerable: true
            },
            "filters": {
                get: function () {
                    return _filters;
                },
                set: function (value) {
                    if (!isFilterArrayOrNull(value)) {
                        throw new Error(n + ".filter filters property must be an array " + n + ".filter values or null.");
                    }

                    if (isNull(value)) {
                        _filters = [];
                    }
                    else {
                        _filters = value;
                    }


                },
                enumerable: true
            },
            "type": {
                get: function () {
                    return _type;
                },
                set: function (value) {
                    if (!isEnumMember(Sdk.FetchXml.FilterType, value)) {
                        throw new Error(n + ".filter filters property must be a " + n + ".FilterType value.");
                    }
                    _type = value;

                },
                enumerable: true
            },
            "isQuickFindFields": {
                get: function () {
                    return _isquickfindfields;
                },
                set: function (value) {
                    if (!isBooleanOrNull(value)) {
                        throw new Error(n + ".filter isquickfindfields property must be a boolean value or null.");
                    }
                    _isquickfindfields = value;

                },
                enumerable: true
            }

        });

        //Constructor
        if (type) {
            this.type = type;
        }
        if (conditions) {
            var errorMsg = n + ".filter constructor conditions parameter must be an array of " + n + ".condition.";
            if (isConditionArray(conditions)) {
                conditions.forEach(function (c) {
                    if (isCondition(c)) {
                        _conditions.push(c);
                    }
                    else {
                        throw new Error(errorMsg);
                    }
                });
            }
        }

        if (filters) {
            var errorMsg = n + ".filter constructor filters parameter must be an array of " + n + ".filter.";
            if (Array.isArray(filters)) {
                filters.forEach(function (f) {
                    if (isFilter(f)) {
                        _filters.push(f);
                    }
                    else {
                        throw new Error(errorMsg);
                    }
                });
            }
            else {
                throw new Error(errorMsg);
            }
        }

        return Object.seal(this);
    }
    /** @description Adds a condition to the conditions collection
    * @param {Sdk.FetchXml.attribute | Sdk.FetchXml.condition} attributeOrCondition When Sdk.FetchXml.condition the condition is added. 
      When Sdk.FetchXml.attribute, the attribute property of a new condition
    * @param {Sdk.FetchXml.Operator} [operator] The operator property for a new condition. Required when the first parameter is an Sdk.FetchXml.attribute
    * @param {Array} [values] The values to compare for a new condition.
    * @returns {Sdk.FetchXml.filter}
    */
    this.filter.prototype.addCondition = function (attributeOrCondition, operator, values) {
        if (isCondition(attributeOrCondition)) {
            this.conditions.push(attributeOrCondition);
        }
        else {
            this.conditions.push(new Sdk.FetchXml.condition(attributeOrCondition, operator, values));
        }

        return this;
    }
    /** @description Removes a condition from the conditions collection by reference
    * @param {Sdk.FetchXml.condition} condition The condition to remove from the conditions collection
    * @returns {Sdk.FetchXml.filter}
    */
    this.filter.prototype.removeConditionByRef = function (condition) {
        if (!isCondition(condition)) {
            throw new Error(n + ".filter removeConditionByRef method condition parameter must be an " + n + ".condition.")
        }
        removeCollectionValueByRef(this.conditions, condition);

        return this;
    }
    /** @description Removes a condition from the conditions collection by value
    * @param {Sdk.FetchXml.condition} condition The condition to remove from the conditions collection
    * @returns {Sdk.FetchXml.filter}
    */
    this.filter.prototype.removeCondition = function (condition) {
        if (!isCondition(condition)) {
            throw new Error(n + ".filter removeCondition method condition parameter must be an " + n + ".condition.")
        }
        removeCollectionValue(this.conditions, condition);

        return this;
    }
    /** @description Adds a filter to the filters collection
    * @param {Sdk.FetchXml.filter} filter The filter to add to the filters collectio
    * @returns {Sdk.FetchXml.filter}
    */
    this.filter.prototype.addFilter = function (filter) {
        if (isFilter(filter)) {
            this.filters.push(filter);

        } else {
            throw new Error(n + ".filter addFilter method filter parameter must be a " + n + ".filter value.")
        }
        return this;
    }
    /** @description Removes all references to a filter object
    * @param {Sdk.FetchXml.filter} filter The filter to remove from the filters collectio
    * @returns {Sdk.FetchXml.filter}
    */
    this.filter.prototype.removeFilterByRef = function (filter) {
        if (!isFilter(filter)) {
            throw new Error(n + ".filter removeFilterByRef method filter parameter must be an " + n + ".filter.")
        }
        removeCollectionValueByRef(this.filters, filter);

        return this;
    }
    /** @description Removes all matching filters from the filters collection
    * @param {Sdk.FetchXml.filter} filter The filter to remove from the filters collectio
    * @returns {Sdk.FetchXml.filter}
    */
    this.filter.prototype.removeFilter = function (filter) {
        if (!isFilter(filter)) {
            throw new Error(n + ".filter removeFilter method filter parameter must be an " + n + ".filter.")
        }
        removeCollectionValue(this.filters, filter);

        return this;
    }
    /** @description Sets the isQuickFindFields property
    * @param {boolean | null} value The value to set
    * @returns {Sdk.FetchXml.filter}
    */
    this.filter.prototype.setIsQuickFindFields = function (value) {
        this.isQuickFindFields = value;
        return this;
    }
    /** @description Sets the type property
    * @param {Sdk.FetchXml.FilterType} value The value to set
    * @returns {Sdk.FetchXml.filter}
    */
    this.filter.prototype.setType = function (value) {
        this.type = value;
        return this;
    }
    //Internal use only
    this.filter.prototype.toXml = function (doc) {
        var fNode = doc.createElement("filter");
        if (this.type) {
            fNode.setAttribute("type", this.type)
        }
        if (isBoolean(this.isQuickFindFields)) {
            fNode.setAttribute("isquickfindfields", this.isQuickFindFields)
        }
        this.conditions.forEach(function (c) {
            fNode.appendChild(c.toXml(doc));
        })
        this.filters.forEach(function (f) {
            fNode.appendChild(f.toXml(doc));
        })
        return fNode;
    }
    /** @description Contains the data for a fetchXml condition element.
    * @param {string} attribute The attribute to evaluate in the condition.
    * @param {Sdk.FetchXml.Operator} operator The operator to use when evaluating the attribute.
    * @param {Array} [values] The value(s) to apply in the comparison.
    * @property {Sdk.FetchXml.Aggregate} aggregate Gets or sets the aggregate value to apply to the condition.
    * @property {string} alias Gets or sets the alias value to apply to the condition.
    * @property {string} attribute Gets or sets the attribute value to apply to the condition.
    * @property {string} column Gets or sets the column attribute value to apply to the condition.
    * @property {string} entityname Gets or sets the entityname attribute value to apply to the condition.
    * @property {Sdk.FetchXml.Operator} operator Gets or sets the operator attribute value to apply to the condition.
    * @property {Sdk.FetchXml.RowAggregate} rowAggregate Gets or sets the rowAggregate attribute value to apply to the condition.
    * @property {boolean} uihidden Gets or sets the uihidden attribute value to apply to the condition.
    * @property {string} uiname Gets or sets the uiname attribute value to apply to the condition.
    * @property {string} uitype Gets or sets the uitype attribute value to apply to the condition.
    * @property {Array} values Gets or sets the  value(s) to apply in the comparison.
    * @returns {Sdk.FetchXml.condition}
    */
    this.condition = function (attribute, operator, values) {
        if (!(isCondition(this)))
        { return new Sdk.FetchXml.condition(attribute, operator, values) }

        var _aggregate, _alias, _attribute, _column, _entityname, _operator, _rowAggregate, _uiname, _uitype;
        var _uihidden = null;
        var _values = [];
        Object.defineProperties(this, {
            "hash": {
                get: function () {
                    var s = _attribute.concat(_operator,
                        (_aggregate ? _aggregate : ""),
                        (_alias ? _alias : ""),
                        (_column ? _column : ""),
                        (_entityname ? _entityname : ""),
                        (_rowAggregate ? _rowAggregate : ""),
                        (isNullOrUndefined(_uihidden) ? "" : _uihidden),
                        (_uiname ? _uiname : ""),
                        (_uitype ? _uitype : ""),
                        getCollectionHash(_values)
                        );
                    return s.hashCode();
                },
                enumerable: false
            },
            "aggregate": {
                get: function () {
                    return _aggregate;
                },
                set: function (value) {
                    if (!isEnumMemberOrNull(Sdk.FetchXml.Aggregate, value)) {
                        throw new Error(n + ".condition aggregate property must be a " + n + ".Aggregate value or null.");
                    }
                    _aggregate = value;

                },
                enumerable: true
            },
            "alias": {
                get: function () {
                    return _alias;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".condition alias property must be a string value or null.");
                    }
                    _alias = value;

                },
                enumerable: true
            },
            "attribute": {
                get: function () {
                    return _attribute;
                },
                set: function (value) {
                    if (!isString(value)) {
                        throw new Error(n + ".condition attribute property must be a string value.");
                    }
                    _attribute = value;

                },
                enumerable: true
            },
            "column": {
                get: function () {
                    return _column;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".condition column property must be a string value or null.");
                    }
                    _column = value;

                },
                enumerable: true
            },
            "entityname": {
                get: function () {
                    return _entityname;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".condition entityname property must be a string value or null.");
                    }
                    _entityname = value;

                },
                enumerable: true
            },
            "operator": {
                get: function () {
                    return _operator;
                },
                set: function (value) {
                    if (!isEnumMember(Sdk.FetchXml.Operator, value)) {
                        throw new Error(n + ".condition aggregate property must be a " + n + ".Operator value.");
                    }
                    _operator = value;

                },
                enumerable: true
            },
            "rowAggregate": {
                get: function () {
                    return _rowAggregate;
                },
                set: function (value) {
                    if (!isEnumMemberOrNull(Sdk.FetchXml.RowAggregate, value)) {
                        throw new Error(n + ".condition aggregate property must be a " + n + ".RowAggregate value or null.");
                    }
                    _rowAggregate = value;

                },
                enumerable: true
            },
            "uihidden": {
                get: function () {
                    return _uihidden;
                },
                set: function (value) {
                    if (!isBooleanOrNull(value)) {
                        throw new Error(n + ".condition uihidden property must be a boolean value or null.");
                    }
                    _uihidden = value;

                },
                enumerable: true
            },
            "uiname": {
                get: function () {
                    return _uiname;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".condition uiname property must be a string value or null.");
                    }
                    _uiname = value;

                },
                enumerable: true
            },
            "uitype": {
                get: function () {
                    return _uitype;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".condition uitype property must be a string value or null.");
                    }
                    _uitype = value;

                },
                enumerable: true
            },
            "values": {
                get: function () {
                    return _values;
                },
                set: function (value) {
                    if (!isValueArrayOrNull(value)) {
                        throw new Error(n + ".condition values property must be an array of " + n + ".value");
                    }

                    if (isNull(value)) {
                        _values = [];
                    }
                    else {
                        _values = value;
                    }


                },
                enumerable: true
            }
        });

        //Constructor
        if (attribute && operator) {
            this.attribute = attribute;
            this.operator = operator;
        }
        else {
            throw new Error(n + ".condition constructor parameters attribute and operator are required.")
        }
        if (values) {
            this.values = values;
        }

        return Object.seal(this);
    }
    /** @description Sets the value of the condition attribute
     * @param {string} attribute The attribute to evaluate in the condition.
     * @returns {Sdk.FetchXml.condition}
     */
    this.condition.prototype.setAttribute = function (attributeName) {
        this.attribute = attributeName;
        return this;
    }
    /** @description Sets the value of the condition attribute
     * @param {Sdk.FetchXml.Operator} operator The operator to use when evaluating the attribute.
     * @returns {Sdk.FetchXml.condition}
     */
    this.condition.prototype.setOperator = function (operator) {
        this.operator = operator;
        return this;
    }
    /** @description Sets the value of the condition operator
     * @param {Array} values The the value(s) to apply in the comparison.
     * @returns {Sdk.FetchXml.condition}
     */
    this.condition.prototype.setValues = function (values) {
        this.values = values;

        return this;
    }
    /** @description Adds a value to the values to apply in the comparison
     * @param {Sdk.FetchXml.value | object} value The the value to add to the values.
     * @returns {Sdk.FetchXml.condition}
     */
    this.condition.prototype.addValue = function (value) {
        if (isValue(value)) {
            this.values.push(value);
        }
        else {
            this.values.push(new Sdk.FetchXml.value(value));
        }

        return this;
    }
    /** @description Removes any values from the values collection by reference
    * @param {Sdk.FetchXml.value} value The value to remove from the values collection
    * @returns {Sdk.FetchXml.condition}
    */
    this.condition.prototype.removeValueByRef = function (value) {
        if (!isValue(value)) {
            throw new Error(n + ".condition removeValueByRef method value parameter must be an " + n + ".value.")
        }
        removeCollectionValueByRef(this.values, value);

        return this;
    }
    /** @description Removes all matching values from the values collection
    * @param {Sdk.FetchXml.value} value The value to remove from the values collection
    * @returns {Sdk.FetchXml.condition}
    */
    this.condition.prototype.removeValue = function (value) {
        if (!isValue(value)) {
            throw new Error(n + ".condition removeValue method value parameter must be an " + n + ".value.")
        }
        removeCollectionValue(this.values, value);

        return this;
    }
    /** @description Removes all any values from the values collection with the specified value property
    * @param {object} value The value to remove from the values collection
    * @returns {Sdk.FetchXml.condition}
    */
    this.condition.prototype.removeValueByValue = function (value) {
        removeCollectionValueByProperty(this.values, "value", value);
        return this;
    }
    /** @description Sets the Aggregate to apply in the condition
     * @param {Sdk.FetchXml.Aggregate} aggregate The Aggregate to apply in the condition
     * @returns {Sdk.FetchXml.condition}
     */
    this.condition.prototype.setAggregate = function (aggregate) {
        this.aggregate = aggregate;
        return this;
    }
    /** @description Sets the Alias to apply in the condition
     * @param {string} alias The alias to apply in the condition
     * @returns {Sdk.FetchXml.condition}
     */
    this.condition.prototype.setAlias = function (alias) {
        this.alias = alias;
        return this;
    }
    /** @description Sets the Column to apply in the condition
     * @param {string} column The column to apply in the condition
     * @returns {Sdk.FetchXml.condition}
     */
    this.condition.prototype.setColumn = function (column) {
        this.column = column;
        return this;
    }
    /** @description Sets the entityname to apply in the condition
     * @param {string} entityname The entityname to apply in the condition
     * @returns {Sdk.FetchXml.condition}
     */
    this.condition.prototype.setEntityname = function (entityname) {
        this.entityname = entityname;
        return this;
    }
    /** @description Sets the rowAggregate to apply in the condition
     * @param {Sdk.FetchXml.RowAggregate} rowAggregate The rowAggregate to apply in the condition
     * @returns {Sdk.FetchXml.condition}
     */
    this.condition.prototype.setRowAggregate = function (rowAggregate) {
        this.rowAggregate = rowAggregate;
        return this;
    }
    /** @description Sets the uihidden to apply in the condition
     * @param {boolean | null} uihidden The uihidden to apply in the condition
     * @returns {Sdk.FetchXml.condition}
     */
    this.condition.prototype.setUIhidden = function (uihidden) {
        this.uihidden = uihidden;
        return this;
    }
    /** @description Sets the uiname to apply in the condition
     * @param {string} uihidden The uiname to apply in the condition
     * @returns {Sdk.FetchXml.condition}
     */
    this.condition.prototype.setUIname = function (uiname) {
        this.uiname = uiname;
        return this;
    }
    /** @description Sets the uitype to apply in the condition
     * @param {string} uitype The uitype to apply in the condition
     * @returns {Sdk.FetchXml.condition}
     */
    this.condition.prototype.setUItype = function (uitype) {
        this.uitype = uitype;
        return this;
    }
    //Internal use only
    this.condition.prototype.toXml = function (doc) {
        var cNode = doc.createElement("condition");
        if (this.aggregate) {
            cNode.setAttribute("aggregate", this.aggregate)
        }
        if (this.alias) {
            cNode.setAttribute("alias", this.alias)
        }
        if (this.attribute) {
            cNode.setAttribute("attribute", this.attribute)
        }
        if (this.column) {
            cNode.setAttribute("column", this.column)
        }
        if (this.entityname) {
            cNode.setAttribute("entityname", this.entityname)
        }
        if (this.operator) {
            cNode.setAttribute("operator", this.operator)
        }
        if (this.rowAggregate) {
            cNode.setAttribute("rowAggregate", this.rowAggregate)
        }
        if (isBoolean(this.uihidden)) {
            cNode.setAttribute("uihidden", this.uihidden)
        }
        if (this.uiname) {
            cNode.setAttribute("uiname", this.uiname)
        }
        if (this.uitype) {
            cNode.setAttribute("uitype", this.uitype)
        }
        /*
Note from fetch.xsd:
    The attribute "value" is used for all operators that compare to a single value (for example, eq).
    The element "value" is used for operators that compare to multiple values (for example, in).
    Some operators require neither the attribute "value" or the element "value" (for example, null). 

   Groupings below are guesses and not confirmed.     
        */
        switch (this.operator) {
            //Operators used for single values
            case "begins-with":
            case "ends-with":
            case "eq":
            case "ge":
            case "gt":
            case "last-x-days":
            case "last-x-fiscal-periods":
            case "last-x-fiscal-years":
            case "last-x-hours":
            case "last-x-months":
            case "last-x-weeks":
            case "last-x-years":
            case "last-year":
            case "le":
            case "like":
            case "lt":
            case "ne":
            case "neq": //Is this the same as 'ne'?
            case "next-x-days":
            case "next-x-fiscal-periods":
            case "next-x-fiscal-years":
            case "next-x-hours":
            case "next-x-months":
            case "next-x-weeks":
            case "next-x-years":
            case "not-begin-with":
            case "not-end-with":
            case "not-like":
            case "olderthan-x-days":
            case "olderthan-x-hours":
            case "olderthan-x-minutes":
            case "olderthan-x-months":
            case "olderthan-x-weeks":
            case "olderthan-x-years":
            case "on":
            case "on-or-after":
            case "on-or-before":
            case "in-fiscal-period":
            case "in-fiscal-year":

                if (this.values.length == 1) {
                    cNode.setAttribute("value", this.values[0].value)
                }
                else {
                    var enumPropertyName = getEnumNameFromValue(Sdk.FetchXml.Operator, this.operator);
                    throw new Error(n + ".condition values property must contain single value when the " + n + ".Operator." + enumPropertyName + " operator is used.");
                }
                break;
                //Operators used for multiple values
            case "between":
            case "in":
            case "not-between":
            case "not-in":
            case "in-fiscal-period-and-year":
            case "in-or-after-fiscal-period-and-year":
            case "in-or-before-fiscal-period-and-year":
                if (this.values.length > 1) {
                    this.values.forEach(function (v) {
                        cNode.appendChild(v.toXml(doc));
                    })
                }
                else {
                    var enumPropertyName = getEnumNameFromValue(Sdk.FetchXml.Operator, this.operator);
                    throw new Error(n + ".condition values property must contain multiple values when the " + n + ".Operator." + enumPropertyName + " operator is used.");
                }
                break;
                //Operators that require no values
            case "above":
            case "eq-businessid":
            case "eq-or-above":
            case "eq-or-under":
            case "eq-userid": //?
            case "eq-userlanguage": //?
            case "eq-useroruserhierarchy":
            case "eq-useroruserhierarchyandteams":
            case "eq-useroruserteams":
            case "eq-userteams":
            case "last-fiscal-period":
            case "last-fiscal-year":
            case "last-month":
            case "last-seven-days":
            case "last-week":
            case "ne-businessid"://?
            case "ne-userid"://?
            case "next-fiscal-period":
            case "next-fiscal-year":
            case "next-month":
            case "next-seven-days":
            case "next-week":
            case "next-year":
            case "not-null":
            case "not-under":
            case "null":
            case "this-fiscal-period":
            case "this-fiscal-year":
            case "this-month":
            case "this-week":
            case "this-year":
            case "today":
            case "tomorrow":
            case "under":
            case "yesterday":
                //No value required
                if (this.values.length > 0) {
                    var enumPropertyName = getEnumNameFromValue(Sdk.FetchXml.Operator, this.operator);
                    console.log("%s.condition doesn't require values when the %s.Operator.%s operator is used. The values passed were ignored.", n, n, enumPropertyName);
                }

                break;
            default:
                throw new Error(this.operator + " is an unexpected " + n + ".Operator value.")
                break;
        }


        return cNode;
    }
    /** @description Contains the data for a fetchXml value element.
    * @param {string} value The the value of the value
    * @param {string} [uiname] The uiname for the value
    * @param {string} [uitype] The uitype for the value
    * @property {object} value Gets or sets the  value for the value
    * @property {string} uiname Gets or sets the uiname to apply to the value
    * @property {string} uitype Gets or sets the uitype to apply to the value    
    * @returns {Sdk.FetchXml.value}
    */
    this.value = function (value, uiname, uitype) {
        if (!(isValue(this)))
        { return new Sdk.FetchXml.value(value, uiname, uitype) }

        var _value, _uiname, _uitype;
        Object.defineProperties(this, {
            "hash": {
                get: function () {
                    var s = _value.concat(
                        (_uiname ? _uiname : ""),
                        (_uitype ? _uitype : "")
                        );
                    return s.hashCode();
                },
                enumerable: false
            },
            "value": {
                get: function () {
                    return _value;
                },
                set: function (value) {
                    if (typeof value == "undefined") {
                        throw new Error(n + ".value value property is undefined.");
                    }
                    _value = value;

                },
                enumerable: true
            },
            "uiname": {
                get: function () {
                    return _uiname;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".condition uiname property must be a string value or null.");
                    }
                    _uiname = value;

                },
                enumerable: true
            },
            "uitype": {
                get: function () {
                    return _uitype;
                },
                set: function (value) {
                    if (!isStringOrNull(value)) {
                        throw new Error(n + ".condition uitype property must be a string value or null.");
                    }
                    _uitype = value;

                },
                enumerable: true
            }
        });
        //Constructor
        if (value) {
            this.value = value;
        }
        if (uiname) {
            this.uiname = uiname;
        }
        if (uitype) {
            this.uitype = uitype;
        }
        return Object.seal(this);
    }
    /** @description Sets the value to apply in the value
    * @param {string} value The value to apply in the value
    * @returns {Sdk.FetchXml.value}
    */
    this.value.prototype.setValue = function (value) {
        this.value = value;
        return this;
    }
    /** @description Sets the uiname to apply in the value
    * @param {string} uiname The uiname to apply in the value
    * @returns {Sdk.FetchXml.value}
    */
    this.value.prototype.setUIname = function (value) {
        this.uiname = value;
        return this;
    }
    /** @description Sets the uitype to apply in the value
    * @param {string} uitype The uitype to apply in the value
    * @returns {Sdk.FetchXml.value}
    */
    this.value.prototype.setUItype = function (value) {
        this.uitype = value;
        return this;
    }
    this.value.prototype.toXml = function (doc) {
        var vNode = doc.createElement("value");
        if (this.uitype) {
            vNode.setAttribute("uitype", this.uitype)
        }
        if (this.uiname) {
            vNode.setAttribute("uiname", this.uiname)
        }
        vNode.appendChild(doc.createTextNode(this.value));
        return vNode;
    }

    // Enumerations
    this.Mapping = Object.freeze({
        Internal: "internal",
        Logical: "logical"
    });
    this.OutputFormat = Object.freeze({
        Ado: "xml-ado",
        Auto: "xml-auto",
        Elements: "xml-elements",
        Raw: "xml-raw",
        Platform: "xml-platform"
    });
    this.Aggregate = Object.freeze({
        Count: "count",
        CountColumn: "countcolumn",
        Sum: "sum",
        Avg: "avg",
        Min: "min",
        Max: "max"
    });
    this.RowAggregate = Object.freeze({
        Countchildren: "countchildren"
    });
    this.DateGrouping = Object.freeze({
        Day: "day",
        Week: "week",
        Month: "month",
        Quarter: "quarter",
        Year: "year",
        FiscalPeriod: "fiscal-period",
        FiscalYear: "fiscal-year"
    });
    this.Operator = Object.freeze({
        /* Returns all records in referenced record's hierarchical ancestry line.*/
        Above: "above",
        /* The string occurs at the beginning of another string.*/
        BeginsWith: "begins-with",
        /* The value is between two values.*/
        Between: "between",
        /* The string ends with another string.*/
        EndsWith: "ends-with",
        /* The values are compared for equality. */
        Equal: "eq",
        /* The value is equal to the specified business ID. */
        EqualBusinessId: "eq-businessid",
        /* Returns the referenced record and all records above it in the hierarchy.*/
        EqualOrAbove: "eq-or-above",
        /* Returns the referenced record and all records below it in the hierarchy.*/
        EqualOrUnder: "eq-or-under",
        /* The value is equal to the specified user ID.*/
        EqualUserId: "eq-userid",
        /* The value is equal to the language for the user. */
        EqualUserLanguage: "eq-userlanguage",
        /* When hierarchical security models are used, Equals current user or his reporting hierarchy*/
        EqualUserOrUserHierarchy: "eq-useroruserhierarchy",
        /* When hierarchical security models are used, Equals current user and his teams or his reporting hierarchy and their teams*/
        EqualUserOrUserHierarchyAndTeams: "eq-useroruserhierarchyandteams",
        /* The record is owned by a user or teams that the user is a member of.*/
        EqualUserOrUserTeams: "eq-useroruserteams",
        /* The record is owned by teams that the user is a member of.*/
        EqualUserTeams: "eq-userteams",
        /* The value is greater than or equal to the compared value.*/
        GreaterOrEqual: "ge",
        /* The value is greater than the compared value.*/
        GreaterThan: "gt",
        /* The value exists in a list of values.*/
        In: "in",
        /* The value is within the specified fiscal period.*/
        InFiscalPeriod: "in-fiscal-period",
        /* The value is within the specified fiscal period and year.*/
        InFiscalPeriodAndYear: "in-fiscal-period-and-year",
        /* The value is within the specified year.*/
        InFiscalYear: "in-fiscal-year",
        /* The value is within or after the specified fiscal period and year.*/
        InOrAfterFiscalPeriodAndYear: "in-or-after-fiscal-period-and-year",
        /* The value is within or before the specified fiscal period and year.*/
        InOrBeforeFiscalPeriodAndYear: "in-or-before-fiscal-period-and-year",
        /* The value is within the last fiscal period.*/
        LastFiscalPeriod: "last-fiscal-period",
        /* The value is within the last fiscal year.*/
        LastFiscalYear: "last-fiscal-year",
        /* The value is within the last month*/
        LastMonth: "last-month",
        /* The value is within last seven days.*/
        LastSevenDays: "last-seven-days",
        /* The value is within the previous week*/
        LastWeek: "last-week",
        /* The value is within last X days.*/
        LastXDays: "last-x-days",
        /* The value is within the last X fiscal periods.*/
        LastXFiscalPeriods: "last-x-fiscal-periods",
        /* The value is within the last X fiscal years.*/
        LastXFiscalYears: "last-x-fiscal-years",
        /* The value is within the last X hours.*/
        LastXHours: "last-x-hours",
        /* The value is within the last X months.*/
        LastXMonths: "last-x-months",
        /* The value is within the last X weeks.*/
        LastXWeeks: "last-x-weeks",
        /* The value is within the last X years.*/
        LastXYears: "last-x-years",
        /* The value is within the last year.*/
        LastYear: "last-year",
        /* The value is less than or equal to the compared value.*/
        LessOrEqual: "le",
        /* The character string is matched to the specified pattern.*/
        Like: "like",
        /* The value is less than the compared value.*/
        LessThan: "lt",
        /* The two values are not equal.*/
        NotEqual: "ne",
        /* The value is not equal to the specified business ID.*/
        NotEqualBusinessId: "ne-businessid",
        /* The value is not equal to the specified user ID.*/
        NotEqualUserId: "ne-userid",
        /* Not Equal To*/
        Neq: "neq", //Is this the same as 'ne'?
        /* The value is within the next fiscal period.*/
        NextFiscalPeriod: "next-fiscal-period",
        /* The value is within the next fiscal year.*/
        NextFiscalYear: "next-fiscal-year",
        /* The value is within the next month.*/
        NextMonth: "next-month",
        /* The value is within the next seven days.*/
        NextSevenDays: "next-seven-days",
        /* The value is within the next week.*/
        NextWeek: "next-week",
        /* The value is within the X days.*/
        NextXDays: "next-x-days",
        /* The value is within the next X fiscal periods.*/
        NextXFiscalPeriods: "next-x-fiscal-periods",
        /* The value is within the next X fiscal years.*/
        NextXFiscalYears: "next-x-fiscal-years",
        /* The value is within the next X hours.*/
        NextXHours: "next-x-hours",
        /* The value is within the next X nonths.*/
        NextXMonths: "next-x-months",
        /* The value is within the next X weeks.*/
        NextXWeeks: "next-x-weeks",
        /* The value is within the next X years.*/
        NextXYears: "next-x-years",
        /* The value is within the next year.*/
        NextYear: "next-year",
        /* The string does not begin with another string.*/
        NotBeginWith: "not-begin-with",
        /* The value is not between two values.*/
        NotBetween: "not-between",
        /* The string does not end with another string.*/
        NotEndWith: "not-end-with",
        /* The given value is not matched to a value in a subquery or a list.*/
        NotIn: "not-in",
        /* The character string does not match the specified pattern.*/
        NotLike: "not-like",
        /* The value is not null.*/
        NotNull: "not-null",
        /* Returns all records not below the referenced record in the hierarchy*/
        NotUnder: "not-under",
        /* The value is null.*/
        Null: "null",
        /* The value is older than the specified number of days. */
        OlderThanXDays: "olderthan-x-days",
        /* The value is older than the specified number of hours. */
        OlderThanXHours: "olderthan-x-hours",
        /* The value is older than the specified number of minutes. */
        OlderThanXMinutes: "olderthan-x-minutes",
        /* The value is older than the specified number of months. */
        OlderThanXMonths: "olderthan-x-months",
        /* The value is older than the specified number of weeks. */
        OlderThanXWeeks: "olderthan-x-weeks",
        /* The value is older than the specified number of years. */
        OlderThanXYears: "olderthan-x-years",
        /* 	The value is on a specified date.*/
        On: "on",
        /* The value is on or after a specified date.*/
        OnOrAfter: "on-or-after",
        /* The value is on or before a specified date.*/
        OnOrBefore: "on-or-before",
        /* 	The value is within the current fiscal period.*/
        ThisFiscalPeriod: "this-fiscal-period",
        /* The value is within the current fiscal year.*/
        ThisFiscalYear: "this-fiscal-year",
        /* The value is within the current month.*/
        ThisMonth: "this-month",
        /* The value is within the current week.*/
        ThisWeek: "this-week",
        /* 	The value is within the current year.*/
        ThisYear: "this-year",
        /* The value equals today’s date.*/
        Today: "today",
        /* The value equals tomorrow’s date.*/
        Tomorrow: "tomorrow",
        /* Returns all child records below the referenced record in the hierarchy*/
        Under: "under",
        /* The value equals yesterday’s date.*/
        Yesterday: "yesterday"
    });
    this.Build = Object.freeze({
        OnePoint504021: "1.504021",
        OnePoint003017: "1.003017"
    });
    this.FilterType = Object.freeze({
        And: "and",
        Or: "or"
    });
    //Internal Validation functions
    function isBoolean(obj) {
        return (typeof obj === "boolean");
    }
    function isBooleanOrNull(obj) {
        return (isNull(obj) || isBoolean(obj))
    }
    function isNumber(obj) {
        return (typeof (obj) === "number");
    }
    function isNumberOrNull(obj) {
        return (isNull(obj) || isNumber(obj))
    }
    function isNull(obj) {
        return (obj === null);
    }
    function isNullOrUndefined(obj) {
        return (obj === null || typeof obj == "undefined");
    }
    function isEnumMember(enumType, obj) {
        for (var i in enumType) {
            if (obj === enumType[i]) {
                return true;
            }
        }
        return false;
    }
    function isEnumMemberOrNull(enumType, obj) {
        return (isNull(obj) || isEnumMember(enumType, obj));
    }
    function isString(obj) {
        return (typeof obj === "string");
    }
    function isStringOrNull(obj) {
        return (isNull(obj) || isString(obj));
    }
    function isOrder(obj) {
        return (obj instanceof Sdk.FetchXml.order)
    }
    function isOrderOrNull(obj) {
        return (isNull(obj) || isOrder(obj));
    }
    function isOrderArray(obj) {
        if (Array.isArray(obj)) {
            obj.forEach(function (item) {
                if (!isOrder(item)) {
                    return false;
                }
            })
            return true;
        }
        return false;
    }
    function isOrderArrayOrNull(obj) {
        return (isNull(obj) || isOrderArray(obj));
    }
    function isEntity(obj) {
        return (obj instanceof Sdk.FetchXml.entity)
    }
    function isAttribute(obj) {
        return (obj instanceof Sdk.FetchXml.attribute)
    }
    function isAttributeArray(obj) {
        if (Array.isArray(obj)) {
            obj.forEach(function (item) {
                if (!isAttribute(item)) {
                    return false;
                }
            })
            return true;
        }
        return false;
    }
    function isAttributeArrayOrNull(obj) {
        return (isNull(obj) || isAttributeArray(obj));
    }
    function isLinkEntity(obj) {
        return (obj instanceof Sdk.FetchXml.linkEntity)
    }
    function isLinkEntityOrNull(obj) {
        return (isNull(obj) || isLinkEntity(obj));
    }
    function isLinkEntityArray(obj) {
        if (Array.isArray(obj)) {
            obj.forEach(function (item) {
                if (!isLinkEntity(item)) {
                    return false;
                }
            })
            return true;
        }
        return false;
    }
    function isLinkEntityArrayOrNull(obj) {
        return (isNull(obj) || isLinkEntityArray(obj));
    }
    function isFilter(obj) {
        return (obj instanceof Sdk.FetchXml.filter)
    }
    function isFilterOrNull(obj) {
        return (isNull(obj) || isFilter(obj));
    }
    function isFilterArray(obj) {
        if (Array.isArray(obj)) {
            obj.forEach(function (item) {
                if (!isFilter(item)) {
                    return false;
                }
            })
            return true;
        }
        return false;
    }
    function isFilterArrayOrNull(obj) {
        return (isNull(obj) || isFilterArray(obj));
    }
    function isCondition(obj) {
        return (obj instanceof Sdk.FetchXml.condition)
    }
    function isConditionOrNull(obj) {
        return (isNull(obj) || isCondition(obj));
    }
    function isConditionArray(obj) {
        if (Array.isArray(obj)) {
            obj.forEach(function (item) {
                if (!isCondition(item)) {
                    return false;
                }
            })
            return true;
        }
        return false;
    }
    function isConditionArrayOrNull(obj) {
        return (isNull(obj) || isConditionArray(obj));
    }
    function isValue(obj) {
        return (obj instanceof Sdk.FetchXml.value)
    }
    function isValueOrNull(obj) {
        return (isNull(obj) || isValue(obj));
    }
    function isValueArray(obj) {
        if (Array.isArray(obj)) {
            var returnValue = true;
            obj.forEach(function (item) {
                if (!isValue(item)) {
                    returnValue = false;
                }
            })
            return returnValue;
        }
        return false;
    }
    function isValueArrayOrNull(obj) {
        return (isNull(obj) || isValueArray(obj));
    }
    //Utility functions
    function getEnumNameFromValue(enumtype, value) {
        for (var i in enumtype) {
            if (enumtype[i] == value) {
                return i;
            }
        }
    }
    function getCollectionHash(collection) {
        var ch = [];
        collection.forEach(function (c) {
            ch.push(c.hash)
        });
        return ch.join();
    }
    //Removes all matching values in a collection
    function removeCollectionValue(collection, value) {
        removeCollectionValueByProperty(collection, "hash", value)
    }
    //Removes all matching values in a collection when property value matches
    function removeCollectionValueByProperty(collection, propertyName, value) {
        var matches = [];
        collection.forEach(function (b, i) {
            //Check if same values
            if (b[propertyName] == value[propertyName]) {
                matches.push(b);
            }
        });
        matches.forEach(function (m) {
            removeCollectionValueByRef(collection, m);
        });

    }
    //Removes all references to an object in a collection
    function removeCollectionValueByRef(collection, value) {
        var indexes = [];
        collection.forEach(function (a, i) {
            //check if same object
            if (a === value) {
                indexes.push(i);
            }
        });
        if (indexes.length > 0) {
            //Removing in reverse order
            for (var i = indexes.length - 1; i >= 0; i--) {
                collection.splice(indexes[i], 1);
            }
        }
    }
    function convertFetchBoolType(value) {
        switch (value) {
            case "true":
            case "1":
                return true;
            case "false":
            case "0":
                return false;
            default:
                throw new Error("Unexpected FetchBoolType value");
                break
        }
    }
    /*
    Hash Generator from
    http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
    http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
    */
    String.prototype.hashCode = function () {
        var hash = 0;
        if (this.length == 0) return hash;
        for (i = 0; i < this.length; i++) {
            char = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }
}).call(Sdk.FetchXml)