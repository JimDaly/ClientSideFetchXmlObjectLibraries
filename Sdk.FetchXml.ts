namespace Sdk.FetchXml {
    @sealed
    export class attribute {
        /**
         * Contains the data for a fetchXml attribute element.
         * @param name The logical name of the attribute
         */
        constructor(name: string) {
            //new keyword not required
            if (!(this instanceof attribute))
            { return new attribute(name) }

            this.name = name;
        }

        private _name: string;
        private _build: Build = null;
        private _addedBy: string = null;
        private _alias: string = null;
        private _aggregate: Aggregate = null;
        private _groupBy: boolean = null;
        private _dateGrouping: DateGrouping = null;
        private _userTimeZone: boolean = null;

        /**
        *Gets or sets logical name of the attribute
        */
        public get name(): string {
            return this._name;
        }
        public set name(value: string) {
            if (!Util.isString(value)) {
                throw new Error("Sdk.FetchXml.attribute name property must be an string.");
            }
            this._name = value;
        }
        /**
        *Gets or sets the build of the attribute
        */
        public get build(): Build {
            return this._build;
        }
        public set build(value: Build) {
            if (!Util.isEnumMemberOrNull(Build, value)) {
                throw new Error("Sdk.FetchXml.attribute build property must be an Sdk.FetchXml.Build value or null.");
            }
            this._build = value;
        }
        /**
        *Gets or sets the addedBy property of the attribute
        */
        public get addedBy(): string {
            return this._addedBy;
        }
        public set addedBy(value: string) {
            if (!Util.isStringOrNull(value)) {
                throw new Error("Sdk.FetchXml.attribute addedBy property must be an string value or null.");
            }
            this._addedBy = value;
        }
        /**
        *Gets or sets the alias property of the attribute
        */
        public get alias(): string {
            return this._alias;
        }
        public set alias(value: string) {
            if (!Util.isStringOrNull(value)) {
                throw new Error("Sdk.FetchXml.attribute alias property must be an string value or null.");
            }
            this._alias = value;
        }
        /**
        *Gets or sets the aggregate property of the attribute
        */
        public get aggregate(): Aggregate {
            return this._aggregate;
        }
        public set aggregate(value: Aggregate) {
            if (!Util.isEnumMemberOrNull(Aggregate, value)) {
                throw new Error("Sdk.FetchXml.attribute aggregate property must be an Sdk.FetchXml.Aggregate value or null.");
            }
            this._aggregate = value;
        }
        /**
        *Gets or sets the groupBy property of the attribute
        */
        public get groupBy(): boolean {
            return this._groupBy;
        }
        public set groupBy(value: boolean) {
            if (!Util.isBooleanOrNull(value)) {
                throw new Error("Sdk.FetchXml.attribute groupBy property must be an boolean value or null.");
            }
            this._groupBy = value;
        }
        /**
        *   Gets or sets the dateGrouping property of the attribute
        */
        public get dateGrouping(): DateGrouping {
            return this._dateGrouping;
        }
        public set dateGrouping(value: DateGrouping) {
            if (!Util.isEnumMemberOrNull(DateGrouping, value)) {
                throw new Error("Sdk.FetchXml.attribute dateGrouping property must be an Sdk.FetchXml.DateGrouping value or null.");
            }
            this._dateGrouping = value;
        }
        /**
        *Gets or sets the userTimeZone property of the attribute
        */
        public get userTimeZone(): boolean {
            return this._userTimeZone;
        }
        public set userTimeZone(value: boolean) {
            if (!Util.isBooleanOrNull(value)) {
                throw new Error("Sdk.FetchXml.attribute userTimeZone property must be an boolean value or null.");
            }
            this._userTimeZone = value;
        }

        /** @description Sets the name property of the attribute attribute
        * @param {string} name The name value to apply to the attribute
        * @returns {Sdk.FetchXml.attribute}
        */
        public setName(name: string) {
            this.name = name;
            return this;
        }

        /** @description Sets the build property of the build attribute
        * @param {Sdk.FetchXml.Build | null} build The build value to apply to the attribute
        * @returns {Sdk.FetchXml.attribute}
        */
        public setBuild(build?: Build) {
            (build) ? this.build = build : this.build = null;
            return this;
        }

        /** @description Sets the addedBy property of the attribute attribute
        * @param {string | null} addedBy The addedBy value to apply to the attribute
        * @returns {Sdk.FetchXml.attribute}
        */
        public setAddedBy(addedBy?: string) {
            (addedBy) ? this.addedBy = addedBy : this.addedBy = null;
            return this;
        }

        /** @description Sets the alias property of the attribute attribute
        * @param {string} alias The alias value to apply to the attribute
        * @returns {Sdk.FetchXml.attribute}
        */
        public setAlias(alias?: string) {
            (alias) ? this.alias = alias : this.alias = null;
            return this;
        }

        /** @description Sets the aggregate property of the attribute attribute
        * @param {Sdk.FetchXml.Aggregate | null } aggregate The aggregate value to apply to the attribute
        * @returns {Sdk.FetchXml.attribute}
        */

        public setAggregate(aggregate?: Aggregate) {
            (aggregate) ? this.aggregate = aggregate : this.aggregate = null;
            return this;
        }
        /** @description Sets the groupBy property of the attribute attribute
        * @param {boolean | null} groupBy The groupBy value to apply to the attribute
        * @returns {Sdk.FetchXml.attribute}
        */

        public setGroupBy(groupBy?: boolean) {
            (groupBy) ? this.groupBy = groupBy : groupBy = null;
            return this;
        }

        /** @description Sets the dateGrouping property of the attribute attribute
        * @param {Sdk.FetchXml.DateGrouping | null} dateGrouping The dateGrouping value to apply to the attribute
        * @returns {Sdk.FetchXml.attribute}
        */
        public setDateGrouping(dateGrouping?: DateGrouping) {
            (dateGrouping) ? this.dateGrouping = dateGrouping : this.dateGrouping = null;
            return this;
        }

        /** @description Sets the userTimeZone property of the attribute attribute
        * @param {boolean | null} userTimeZone The userTimeZone value to apply to the attribute
        * @returns {Sdk.FetchXml.attribute}
        */
        public setUserTimeZone(userTimeZone?: boolean) {
            (userTimeZone) ? this.userTimeZone = userTimeZone : this.userTimeZone = null;
            return this;
        }

        //Internal use only
        toXml(doc: XMLDocument): Node {
            var aNode = doc.createElement("attribute");
            aNode.setAttribute("name", <string>this.name);
            if (this.build) {
                aNode.setAttribute("build", <string>this.build);
            }
            if (this.addedBy) {
                aNode.setAttribute("addedby", <string>this.addedBy);
            }
            if (this.alias) {
                aNode.setAttribute("alias", <string>this.alias);
            }
            if (this.aggregate) {
                aNode.setAttribute("aggregate", <string>this.aggregate);
            }
            if (Util.isBoolean(this.groupBy)) {
                aNode.setAttribute("groupby", (this.groupBy) ? "true" : "false");
            }
            if (this.dateGrouping) {
                aNode.setAttribute("dategrouping", <string>this.dateGrouping);
            }
            if (Util.isBoolean(this.userTimeZone)) {
                aNode.setAttribute("usertimezone", (this.userTimeZone) ? "true" : "false");
            }
            return aNode;
        }

        //Internal use only
        static attributeFromXml(xml) {
            var attObj = new attribute(xml.attributes.getNamedItem("name").nodeValue);

            Util.parseAttributes(xml, attObj, (attObj, name, value) => {
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
                        attObj.groupBy = Util.convertFetchBoolType(value);
                    case "usertimezone":
                        attObj.userTimeZone = Util.convertFetchBoolType(value);
                        break;
                    default:
                        break;

                }
            })

            return attObj;
        }























    }
    @sealed
    export class condition {
        /**
         * Contains the data for a fetchXml condition element.
         * @param attribute The attribute to evaluate in the condition
         * @param operator The operator to use when evaluating the attribute
         * @param [values] The value(s) to apply in the comparison.
         */
        constructor(attribute: string, operator: Sdk.FetchXml.Operator, values?: Array<Sdk.FetchXml.value>) {
            //New keyword not required in JS
            if (!(this instanceof Sdk.FetchXml.condition))
            { return new Sdk.FetchXml.condition(attribute, operator, values) }

            if (attribute && operator) {
                this.attribute = attribute;
                this.operator = operator;
            }
            else {
                throw new Error("Sdk.FetchXml.condition constructor parameters attribute and operator are required.")
            }
            if (values)
                this.values = values;
        }

        private _aggregate: Sdk.FetchXml.Aggregate = null;
        private _alias: string = null;
        private _attribute: string = null;
        private _column: string = null;
        private _entityname: string = null;
        private _operator: Sdk.FetchXml.Operator = null;
        private _rowAggregate: Sdk.FetchXml.RowAggregate = null;
        private _uihidden: boolean = null;
        private _uiname: string = null;
        private _uitype: string = null;
        private _values: Array<Sdk.FetchXml.value> = [];

        /**
        * Gets or sets the aggregate value to apply to the condition.
        */
        public get aggregate(): Sdk.FetchXml.Aggregate {
            return this._aggregate;
        }
        public set aggregate(value: Sdk.FetchXml.Aggregate) {
            this._aggregate = value;
        }
        /**
        * Gets or sets the alias value to apply to the condition.
        */
        public get alias(): string {
            return this._alias;
        }
        public set alias(value: string) {
            this._alias = value;
        }
        /**
        * Gets or sets the attribute value to apply to the condition.
        */
        public get attribute(): string {
            return this._attribute;
        }
        public set attribute(value: string) {
            this._attribute = value;
        }
        /**
        * Gets or sets the column attribute value to apply to the condition.
        */
        public get column(): string {
            return this._column;
        }
        public set column(value: string) {
            this._column = value;
        }
        /**
       * Gets or sets the entityname attribute value to apply to the condition.
       */
        public get entityname(): string {
            return this._entityname;
        }
        public set entityname(value: string) {
            this._entityname = value;
        }
        /**
       * Gets or sets the operator attribute value to apply to the condition.
       */
        public get operator(): Sdk.FetchXml.Operator {
            return this._operator;
        }
        public set operator(value: Sdk.FetchXml.Operator) {
            this._operator = value;
        }
        /**
       * Gets or sets the rowAggregate attribute value to apply to the condition.
       */
        public get rowAggregate(): Sdk.FetchXml.RowAggregate {
            return this._rowAggregate;
        }
        public set rowAggregate(value: Sdk.FetchXml.RowAggregate) {
            this._rowAggregate = value;
        }
        /**
       * Gets or sets the uihidden attribute value to apply to the condition.
       */
        public get uihidden(): boolean {
            return this._uihidden;
        }
        public set uihidden(value: boolean) {
            this._uihidden = value;
        }
        /**
       * Gets or sets the uiname attribute value to apply to the condition.
       */
        public get uiname(): string {
            return this._uiname;
        }
        public set uiname(value: string) {
            this._uiname = value;
        }
        /**
       * Gets or sets the uitype attribute value to apply to the condition.
       */
        public get uitype(): string {
            return this._uitype;
        }
        public set uitype(value: string) {
            this._uitype = value;
        }
        /**
        * Gets or sets the array of values to be applied to the query results
        */
        public get values(): Array<Sdk.FetchXml.value> {
            return this._values;
        }
        public set values(value: Array<Sdk.FetchXml.value>) {
            if (!Sdk.FetchXml.Util.isValueArrayOrNull(value)) {
                throw new Error("Sdk.FetchXml.condition.values must be an array of Sdk.FetchXml.value or null.")
            }
            if (value == null) {
                this._values = [];
            } else {
                this._values = value;
            }
        }
        //Internal use only
        public get hash(): string {
            var s = this._attribute.concat(<string>this._operator,
                (this._aggregate ? <string>this._aggregate : ""),
                (this._alias ? this._alias : ""),
                (this._column ? this._column : ""),
                (this._entityname ? this._entityname : ""),
                (this._rowAggregate ? <string>this._rowAggregate : ""),
                (Sdk.FetchXml.Util.isNullOrUndefined(this._uihidden) ? "" : this._uihidden.toString()),
                (this._uiname ? this._uiname : ""),
                (this._uitype ? this._uitype : ""),
                Sdk.FetchXml.Util.getCollectionHash(this._values)
            );
            return s.hashCode();
        }

        /** @description Sets the value of the condition attribute
         * @param {string} attribute The attribute to evaluate in the condition.
         * @returns {Sdk.FetchXml.condition}
         */
        public setAttribute(attributeName) {
            this.attribute = attributeName;
            return this;
        }

        /** @description Sets the value of the condition attribute
         * @param {Sdk.FetchXml.Operator} operator The operator to use when evaluating the attribute.
         * @returns {Sdk.FetchXml.condition}
         */
        public setOperator(operator) {
            this.operator = operator;
            return this;
        }

        /** @description Sets the value of the condition operator
         * @param {Array} values The the value(s) to apply in the comparison.
         * @returns {Sdk.FetchXml.condition}
         */
        public setValues(values) {
            this.values = values;
            return this;
        }

        /** @description Adds a value to the values to apply in the comparison
         * @param {Sdk.FetchXml.value | any} value The the value to add to the values.
         * @returns {Sdk.FetchXml.condition}
         */
        public addValue(value) {
            if (Sdk.FetchXml.Util.isValue(value)) {
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
        public removeValueByRef(value) {
            if (!Sdk.FetchXml.Util.isValue(value)) {
                throw new Error("Sdk.FetchXml.condition removeValueByRef method value parameter must be an Sdk.FetchXml.value.")
            }
            Sdk.FetchXml.Util.removeCollectionValueByRef(this.values, value);
            return this;
        }

        /** @description Removes all matching values from the values collection
        * @param {Sdk.FetchXml.value} value The value to remove from the values collection
        * @returns {Sdk.FetchXml.condition}
        */
        public removeValue(value) {
            if (!Sdk.FetchXml.Util.isValue(value)) {
                throw new Error("Sdk.FetchXml.condition removeValue method value parameter must be an Sdk.FetchXml.value.")
            }
            Sdk.FetchXml.Util.removeCollectionValue(this.values, value);
            return this;
        }

        /** @description Removes all any values from the values collection with the specified value property
        * @param {object} value The value to remove from the values collection
        * @returns {Sdk.FetchXml.condition}
        */
        public removeValueByValue(value) {
            Sdk.FetchXml.Util.removeCollectionValueByProperty(this.values, "value", value);
            return this;
        }

        /** @description Sets the Aggregate to apply in the condition
         * @param {Sdk.FetchXml.Aggregate} aggregate The Aggregate to apply in the condition
         * @returns {Sdk.FetchXml.condition}
         */
        public setAggregate(aggregate) {
            this.aggregate = aggregate;
            return this;
        }

        /** @description Sets the Alias to apply in the condition
         * @param {string} alias The alias to apply in the condition
         * @returns {Sdk.FetchXml.condition}
         */
        public setAlias(alias) {
            this.alias = alias;
            return this;
        }

        /** @description Sets the Column to apply in the condition
         * @param {string} column The column to apply in the condition
         * @returns {Sdk.FetchXml.condition}
         */
        public setColumn(column) {
            this.column = column;
            return this;
        }

        /** @description Sets the entityname to apply in the condition
         * @param {string} entityname The entityname to apply in the condition
         * @returns {Sdk.FetchXml.condition}
         */
        public setEntityname(entityname) {
            this.entityname = entityname;
            return this;
        }

        /** @description Sets the rowAggregate to apply in the condition
         * @param {Sdk.FetchXml.RowAggregate} rowAggregate The rowAggregate to apply in the condition
         * @returns {Sdk.FetchXml.condition}
         */
        public setRowAggregate(rowAggregate) {
            this.rowAggregate = rowAggregate;
            return this;
        }

        /** @description Sets the uihidden to apply in the condition
         * @param {boolean | null} uihidden The uihidden to apply in the condition
         * @returns {Sdk.FetchXml.condition}
         */
        public setUIhidden(uihidden) {
            this.uihidden = uihidden;
            return this;
        }

        /** @description Sets the uiname to apply in the condition
         * @param {string} uihidden The uiname to apply in the condition
         * @returns {Sdk.FetchXml.condition}
         */
        public setUIname(uiname) {
            this.uiname = uiname;
            return this;
        }

        /** @description Sets the uitype to apply in the condition
         * @param {string} uitype The uitype to apply in the condition
         * @returns {Sdk.FetchXml.condition}
         */
        public setUItype(uitype) {
            this.uitype = uitype;
            return this;
        }

        //Internal use only
        toXml(doc: XMLDocument): Node {

            var cNode = doc.createElement("condition");
            if (this.aggregate) {
                cNode.setAttribute("aggregate", <string>this.aggregate)
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
                cNode.setAttribute("operator", <string>this.operator)
            }
            if (this.rowAggregate) {
                cNode.setAttribute("rowAggregate", <string>this.rowAggregate)
            }
            if (Sdk.FetchXml.Util.isBoolean(this.uihidden)) {
                cNode.setAttribute("uihidden", this.uihidden.toString())
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
                        var enumPropertyName = Sdk.FetchXml.Util.getEnumNameFromValue(Sdk.FetchXml.Operator, this.operator);
                        throw new Error("Sdk.FetchXml.condition values property must contain single value when the Sdk.FetchXml.Operator." + enumPropertyName + " operator is used.");
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
                        var enumPropertyName = Sdk.FetchXml.Util.getEnumNameFromValue(Sdk.FetchXml.Operator, this.operator);
                        throw new Error("Sdk.FetchXml.condition values property must contain multiple values when the Sdk.FetchXml.Operator." + enumPropertyName + " operator is used.");
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
                        var enumPropertyName = Sdk.FetchXml.Util.getEnumNameFromValue(Sdk.FetchXml.Operator, this.operator);
                        console.log("Sdk.FetchXml.condition doesn't require values when the Sdk.FetchXml.Operator.%s operator is used. The values passed were ignored.", enumPropertyName);
                    }

                    break;
                default:
                    throw new Error(this.operator + " is an unexpected Sdk.FetchXml.Operator value.")
                    break;
            }


            return cNode;
        }
        //Internal use only
        static conditionFromXml(xml) {
            var attributeName = xml.attributes.getNamedItem("attribute").nodeValue;
            var operator = xml.attributes.getNamedItem("operator").nodeValue;

            var conditionObj = new Sdk.FetchXml.condition(<string>attributeName, <Operator>operator);



            Sdk.FetchXml.Util.parseAttributes(xml, conditionObj, (conditionObj, name, value) => {
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
                        conditionObj.uihidden = Util.convertFetchBoolType(value);
                        break;
                    case "value":
                        conditionObj.addValue(value);
                        break;
                    default:
                        break;
                }
            })

            for (var i = 0; i < xml.childNodes.length; i++) {

                if (xml.childNodes[i].nodeName == "value") {
                    conditionObj.addValue(value.valueFromXml(xml.childNodes[i]));
                }

            }
            return conditionObj;
        }

    }
    @sealed
    export class entity {
        /**
         * Contains the data for a fetchXml entity element.
         * @param name The logical name of the attribute
         * @param [attributes] The attributes to include with the entity
         * @param [orders] The orders to apply to the query
         * @param [filters] The filters to apply to the query
         */
        constructor(name: string, attributes?: Array<Sdk.FetchXml.attribute>, orders?: Array<Sdk.FetchXml.order>, filters?: Array<Sdk.FetchXml.filter>) {
            if (!(this instanceof Sdk.FetchXml.entity))
            { return new Sdk.FetchXml.entity(name, attributes, orders, filters) }

            this.name = name;
            if (attributes)
                this.attributes = attributes;
            if (orders)
                this.orders = orders;
            if (filters)
                this.filters = filters;
        }

        private _allAttributes: boolean = null;
        private _attributes: Array<Sdk.FetchXml.attribute> = [];
        private _orders: Array<Sdk.FetchXml.order> = [];
        private _linkEntities: Array<Sdk.FetchXml.linkEntity> = [];
        private _filters: Array<Sdk.FetchXml.filter> = [];
        private _name: string;

        /**
        * Gets or sets whether all attributes for the entity should be returned
        */
        public get allAttributes(): boolean {
            return this._allAttributes;
        }
        public set allAttributes(value: boolean) {
            if (!Sdk.FetchXml.Util.isBooleanOrNull(value)) {
                throw new Error("Sdk.FetchXml.entity.allAttributes must be a boolean value or null.")
            }
            this._allAttributes = value;
        }
        /**
        * Gets or sets the array of attribute of the entity to be returned in the query results
        */
        public get attributes(): Array<Sdk.FetchXml.attribute> {
            return this._attributes;
        }
        public set attributes(value: Array<Sdk.FetchXml.attribute>) {
            if (!Sdk.FetchXml.Util.isAttributeArrayOrNull(value)) {
                throw new Error("Sdk.FetchXml.entity.attributes must be an array of Sdk.FetchXml.attribute or null.")
            }
            if (value == null) {
                this._attributes = [];
            } else {
                this._attributes = value;
            }

        }
        /**
        * Gets or sets the array of attribute of the entity to be returned in the query results
        */
        public get orders(): Array<Sdk.FetchXml.order> {
            return this._orders;
        }
        public set orders(value: Array<Sdk.FetchXml.order>) {
            if (!Sdk.FetchXml.Util.isOrderArrayOrNull(value)) {
                throw new Error("Sdk.FetchXml.entity.orders must be an array of Sdk.FetchXml.order or null.")
            }
            if (value == null) {
                this._orders = [];
            } else {
                this._orders = value;
            }

        }
        /**
        * Gets or sets the array of related entities to be returned in the query results
        */
        public get linkEntities(): Array<Sdk.FetchXml.linkEntity> {
            return this._linkEntities;
        }
        public set linkEntities(value: Array<Sdk.FetchXml.linkEntity>) {
            if (!Sdk.FetchXml.Util.isLinkEntityArrayOrNull(value)) {
                throw new Error("Sdk.FetchXml.entity.linkEntities must be an array of Sdk.FetchXml.linkEntity or null.")
            }
            if (value == null) {
                this._linkEntities = [];
            } else {
                this._linkEntities = value;
            }

        }
        /**
        * Gets or sets the array of filters to be applied to the query results
        */
        public get filters(): Array<Sdk.FetchXml.filter> {
            return this._filters;
        }
        public set filters(value: Array<Sdk.FetchXml.filter>) {
            if (!Sdk.FetchXml.Util.isFilterArrayOrNull(value)) {
                throw new Error("Sdk.FetchXml.entity.filters must be an array of Sdk.FetchXml.filter or null.")
            }
            if (value == null) {
                this._filters = [];
            } else {
                this._filters = value;
            }

        }
        /**
        * Gets or sets the logical name of the entity
        */
        public get name(): string {
            return this._name;
        }
        public set name(value: string) {
            if (!Sdk.FetchXml.Util.isString(value)) {
                throw new Error("Sdk.FetchXml.entity.name must be a string.")
            }
            this._name = value;

        }

        /** @description Adds an attribute to the attribute collection
        * @param {Sdk.FetchXml.attribute | string} attributeOrAttributeName the attribute or attribute name to add
        * @returns {Sdk.FetchXml.entity}
        */
        public addAttribute(attributeOrAttributeName: Sdk.FetchXml.attribute | string) {
            if (Sdk.FetchXml.Util.isString(attributeOrAttributeName)) {

                // Some saved queries have duplicate attributes defined, so this is a bit more strict than it has to be.
                var exists = false;
                this.attributes.forEach(function (a) {
                    if (a.name == attributeOrAttributeName) {
                        exists = true;
                    }
                });
                if (!exists) {
                    this.attributes.push(new Sdk.FetchXml.attribute(<string>attributeOrAttributeName))
                }
                return this;
            }
            if (Sdk.FetchXml.Util.isAttribute(attributeOrAttributeName)) {
                var exists = false;
                this.attributes.forEach(function (a) {
                    if (a.name == (<Sdk.FetchXml.attribute>attributeOrAttributeName).name) {
                        exists = true;
                    }
                });
                if (!exists) {
                    this.attributes.push(<Sdk.FetchXml.attribute>attributeOrAttributeName);
                }
            }
            else {
                throw new Error("Sdk.FetchXml.entity addAttribute method attributeOrAttributeName parameter must be an Sdk.FetchXml.attribute or a string value.");
            }
            return this;
        }

        /** @description Removes an attribute from the attributes collection by name
        * @param {string} attributeName The name of the attribute to remove
        * @returns {Sdk.FetchXml.entity}
        */
        public removeAttributeByName(attributeName: string) {
            Sdk.FetchXml.Util.removeCollectionValueByProperty(this.attributes, "name", attributeName)
        }

        /** @description Removes an attribute from the attributes collection by reference
        * @param {Sdk.FetchXml.attribute} attribute The attribute to remove
        * @returns {Sdk.FetchXml.entity}
        */
        public removeAttributeByRef(attribute: Sdk.FetchXml.attribute) {
            Sdk.FetchXml.Util.removeCollectionValueByRef(this.attributes, attribute);
        }

        /** @description Removes an attribute from the attributes collection
        * @param {Sdk.FetchXml.attribute} attribute The attribute to remove
        * @returns {Sdk.FetchXml.entity}
        */
        public removeAttribute(attribute: Sdk.FetchXml.attribute) {
            Sdk.FetchXml.Util.removeCollectionValue(this.attributes, attribute);
        }

        /** @description Adds an order to the orders collection
        * @param {Sdk.FetchXml.order | string} orderOrAttribute The order to add to the attributes collection or the Attribute property of a new order to create
        * @param {boolean} descending Whether the order is descending. True if descending, otherwise false
        * @param {string} alias The alias to set for the order
        * @returns {Sdk.FetchXml.entity}
        */
        public addOrder(orderOrAttribute: any, descending?, alias?) {
            if (Sdk.FetchXml.Util.isOrder(orderOrAttribute)) {
                this.orders.push(orderOrAttribute);
                return this;
            }
            if (Sdk.FetchXml.Util.isString(orderOrAttribute)) {
                this.orders.push(new Sdk.FetchXml.order(orderOrAttribute, descending, alias));
            }
            else {
                throw new Error("Sdk.FetchXml.entity addOrder method orderOrAttribute parameter must be a Sdk.FetchXml.order value or a string.");
            }
            return this;
        }

        /** @description Removes a order from the orders collection by reference
        * @param {Sdk.FetchXml.order} order The order to remove from the orders collection
        * @returns {Sdk.FetchXml.entity}
        */
        public removeOrderByRef(order: Sdk.FetchXml.order) {
            if (!Sdk.FetchXml.Util.isOrder(order)) {
                throw new Error("Sdk.FetchXml.entity removeOrderByRef method order parameter must be an Sdk.FetchXml.order.")
            }
            Sdk.FetchXml.Util.removeCollectionValueByRef(this.orders, order);
            return this;
        }

        /** @description Removes a order from the orders collection by value
        * @param {Sdk.FetchXml.order} order The order to remove from the orders collection
        * @returns {Sdk.FetchXml.entity}
        */
        public removeOrder(order) {
            if (!Sdk.FetchXml.Util.isOrder(order)) {
                throw new Error("Sdk.FetchXml.entity removeOrder method order parameter must be an Sdk.FetchXml.order.")
            }
            Sdk.FetchXml.Util.removeCollectionValue(this.orders, order);
            return this;
        }

        /** @description Sets the name property of the entity element
        * @param {string} name The name value to apply to the entity
        * @returns {Sdk.FetchXml.entity}
        */
        public setName(name: string) {
            this.name = name;
            return this;
        }

        /** @description Sets the allAttributes property of the entity 
        * @param {boolean} [allAttributes] The allAttributes value to apply to the entity. The default is true;
        * @returns {Sdk.FetchXml.entity}
        */
        public setAllAttributes(allAttributes?: boolean) {
            if (Sdk.FetchXml.Util.isBoolean(allAttributes)) {
                this.allAttributes = allAttributes;
            }
            else {
                if (Sdk.FetchXml.Util.isNullOrUndefined(allAttributes)) {
                    this.allAttributes = true;
                }
                else {
                    throw new Error("Sdk.FetchXml.entity setAllAttributes method allAttributes parameter must be a boolean value or null.");
                }
            }

            return this;
        }

        /** @description Adds an linkEntity to the linkEntities collection
        * @param {Sdk.FetchXml.linkEntity} linkEntity The linkEntity to add to the entity
        * @returns {Sdk.FetchXml.entity}
        */
        public addLinkEntity(linkEntity: Sdk.FetchXml.linkEntity) {
            if (Sdk.FetchXml.Util.isLinkEntity(linkEntity)) {
                this.linkEntities.push(linkEntity);
                return this;
            }
            else {
                throw new Error("Sdk.FetchXml.entity addLinkEntity method linkEntity parameter must be a Sdk.FetchXml.linkEntity value.");
            }
            return this;
        }

        /** @description Removes a linkEntity from the linkEntities collection by reference
        * @param {Sdk.FetchXml.linkEntity} linkEntity The linkEntity to remove from the linkEntities collection
        * @returns {Sdk.FetchXml.entity}
        */
        public removeLinkEntityByRef(linkEntity: Sdk.FetchXml.linkEntity) {
            if (!Sdk.FetchXml.Util.isLinkEntity(linkEntity)) {
                throw new Error("Sdk.FetchXml.entity removeLinkEntityByRef method linkEntity parameter must be an Sdk.FetchXml.linkEntity.")
            }
            Sdk.FetchXml.Util.removeCollectionValueByRef(this.linkEntities, linkEntity);
            return this;
        }

        /** @description Removes a linkEntity from the linkEntities collection by value
        * @param {Sdk.FetchXml.linkEntity} linkEntity The linkEntity to remove from the linkEntities collection
        * @returns {Sdk.FetchXml.entity}
        */
        public removeLinkEntity(linkEntity: Sdk.FetchXml.linkEntity) {
            if (!Sdk.FetchXml.Util.isLinkEntity(linkEntity)) {
                throw new Error("Sdk.FetchXml.entity removeLinkEntity method linkEntity parameter must be an Sdk.FetchXml.linkEntity.")
            }
            Sdk.FetchXml.Util.removeCollectionValue(this.linkEntities, linkEntity);
            return this;
        }

        /** @description Adds an filter to the filters collection
       * @param {Sdk.FetchXml.filter} filter The filter to add to the entity
       * @returns {Sdk.FetchXml.entity}
       */
        public addFilter(filter: Sdk.FetchXml.filter) {
            if (Sdk.FetchXml.Util.isFilter(filter)) {
                this.filters.push(filter);
                return this;
            }
            else {
                throw new Error("Sdk.FetchXml.entity addFilter method filter parameter must be a Sdk.FetchXml.filter value.");
            }
            return this;
        }

        /** @description Removes a filter from the filters collection by reference
        * @param {Sdk.FetchXml.filter} filter The filter to remove from the filters collection
        * @returns {Sdk.FetchXml.entity}
        */
        public removeFilterByRef(filter: Sdk.FetchXml.filter) {
            if (!Sdk.FetchXml.Util.isFilter(filter)) {
                throw new Error("Sdk.FetchXml.entity removeFilterByRef method filter parameter must be an Sdk.FetchXml.filter.")
            }
            Sdk.FetchXml.Util.removeCollectionValueByRef(this.filters, filter);
            return this;
        }

        /** @description Removes a filter from the filters collection by value
         * @param {Sdk.FetchXml.filter} filter The filter to remove from the filters collection
         * @returns {Sdk.FetchXml.entity}
         */
        public removeFilter(filter: Sdk.FetchXml.filter) {
            if (!Sdk.FetchXml.Util.isFilter(filter)) {
                throw new Error("Sdk.FetchXml.entity removeFilter method filter parameter must be an Sdk.FetchXml.filter.")
            }
            Sdk.FetchXml.Util.removeCollectionValue(this.filters, filter);
            return this;
        }

        //internal use only
        toXml(doc: XMLDocument): Node {
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
        //Internal use only
        static entityFromXml(xml) {
            var entityObj = new Sdk.FetchXml.entity(xml.attributes.getNamedItem("name").nodeValue);
            entityObj.allAttributes = (xml.getElementsByTagName("all-attributes").length == 1);

            for (var i = 0; i < xml.childNodes.length; i++) {

                if (xml.childNodes[i].nodeName == "attribute") {
                    entityObj.addAttribute(attribute.attributeFromXml(xml.childNodes[i]));
                }
                if (xml.childNodes[i].nodeName == "order") {

                    entityObj.addOrder(order.orderFromXml(xml.childNodes[i]));
                }
                if (xml.childNodes[i].nodeName == "link-entity") {
                    entityObj.addLinkEntity(linkEntity.linkEntityFromXml(xml.childNodes[i]));
                }
                if (xml.childNodes[i].nodeName == "filter") {
                    entityObj.addFilter(filter.filterFromXml(xml.childNodes[i]));
                }

            }

            return entityObj;
        }


    }
    @sealed
    export class fetch {


        /**
        * Contains the data for a fetchXml fetch element.
        * @param entity The entity that is being queried
        */
        constructor(entity?: Sdk.FetchXml.entity) {
            //new keyword not required
            if (!(this instanceof Sdk.FetchXml.fetch))
            { return new Sdk.FetchXml.fetch(entity) }
            if (entity)
                this.entity = entity;
        }

        private _aggregate: boolean = null;
        private _count: number = null;
        private _distinct: boolean = null;
        private _entity: Sdk.FetchXml.entity;
        private _mapping: Sdk.FetchXml.Mapping = null;
        private _minActiveRowVersion: boolean = null;
        private _noLock: boolean = null;
        private _order: Sdk.FetchXml.order = null;
        private _outputFormat: Sdk.FetchXml.OutputFormat = null;
        private _page: number = null;
        private _pagingCookie: string = null;
        private _returnTotalRecordCount: boolean = null;
        private _top: number = null;
        private _utcOffset: number = null;
        private _version: string = null;

        /**
        * Gets or sets the aggregate attribute of the fetch element.
        */
        public get aggregate(): boolean {
            return this._aggregate;
        }
        public set aggregate(value: boolean) {
            if (!Sdk.FetchXml.Util.isBooleanOrNull(value)) {
                throw new Error("Sdk.FetchXml.fetch.aggregate must be a boolean value or null.")
            }
            this._aggregate = value;
        }
        /**
        * Gets or sets the count attribute of the fetch element.
        */
        public get count(): number {
            return this._count;
        }
        public set count(value: number) {
            if (!Sdk.FetchXml.Util.isNumberOrNull(value)) {
                throw new Error("Sdk.FetchXml.fetch.count must be a number value or null.")
            }
            this._count = value;
        }
        /**
        * Gets or sets the distinct attribute of the fetch element.
        */
        public get distinct(): boolean {
            return this._distinct;
        }
        public set distinct(value: boolean) {
            if (!Sdk.FetchXml.Util.isBooleanOrNull(value)) {
                throw new Error("Sdk.FetchXml.fetch.distinct must be a boolean value or null.")
            }
            this._distinct = value;
        }
        /**
        * Gets or sets the entity attribute of the fetch element.
        */
        public get entity(): Sdk.FetchXml.entity {
            return this._entity;
        }
        public set entity(value: Sdk.FetchXml.entity) {
            if (!Sdk.FetchXml.Util.isEntity(value)) {
                throw new Error("Sdk.FetchXml.fetch.entity must be a Sdk.FetchXml.entity value.")
            }
            this._entity = value;
        }
        /**
        * Gets or sets the mapping attribute of the fetch element.
        */
        public get mapping(): Sdk.FetchXml.Mapping {
            return this._mapping;
        }
        public set mapping(value: Sdk.FetchXml.Mapping) {
            if (!Sdk.FetchXml.Util.isEnumMemberOrNull(Sdk.FetchXml.Mapping, value)) {
                throw new Error("Sdk.FetchXml.fetch.mapping must be a Sdk.FetchXml.Mapping value or null.")
            }
            this._mapping = value;
        }
        /**
        * Gets or sets the minActiveRowVersion attribute of the fetch element.
        */
        public get minActiveRowVersion(): boolean {
            return this._minActiveRowVersion;
        }
        public set minActiveRowVersion(value: boolean) {
            if (!Sdk.FetchXml.Util.isBooleanOrNull(value)) {
                throw new Error("Sdk.FetchXml.fetch.minActiveRowVersion must be a boolean value or null.")
            }
            this._minActiveRowVersion = value;
        }
        /**
        * Gets or sets the noLock attribute of the fetch element.
        */
        public get noLock(): boolean {
            return this._noLock;
        }
        public set noLock(value: boolean) {
            if (!Sdk.FetchXml.Util.isBooleanOrNull(value)) {
                throw new Error("Sdk.FetchXml.fetch.noLock must be a boolean value or null.")
            }
            this._noLock = value;
        }
        /**
        * Gets or sets the order attribute of the fetch element.
        */
        public get order(): Sdk.FetchXml.order {
            return this._order;
        }
        public set order(value: Sdk.FetchXml.order) {
            if (!Sdk.FetchXml.Util.isOrderOrNull(value)) {
                throw new Error("Sdk.FetchXml.fetch.order must be a Sdk.FetchXml.order value or null.")
            }
            this._order = value;
        }
        /**
        * Gets or sets the outputFormat attribute of the fetch element.
        */
        public get outputFormat(): Sdk.FetchXml.OutputFormat {
            return this._outputFormat;
        }
        public set outputFormat(value: Sdk.FetchXml.OutputFormat) {
            if (!Sdk.FetchXml.Util.isEnumMemberOrNull(Sdk.FetchXml.OutputFormat, value)) {
                throw new Error("Sdk.FetchXml.fetch.outputFormat must be a Sdk.FetchXml.OutputFormat value or null.")
            }
            this._outputFormat = value;
        }
        /**
        * Gets or sets the page attribute of the fetch element.
        */
        public get page(): number {
            return this._page;
        }
        public set page(value: number) {
            if (!Sdk.FetchXml.Util.isNumberOrNull(value)) {
                throw new Error("Sdk.FetchXml.fetch.page must be a number value or null.")
            }
            this._page = value;
        }
        /**
        * Gets or sets the pagingCookie attribute of the fetch element.
        */
        public get pagingCookie(): string {
            return this._pagingCookie;
        }
        public set pagingCookie(value: string) {
            if (!Sdk.FetchXml.Util.isStringOrNull(value)) {
                throw new Error("Sdk.FetchXml.fetch.pagingCookie must be a string value or null.")
            }
            this._pagingCookie = value;
        }
        /**
        * Gets or sets the returnTotalRecordCount attribute of the fetch element.
        */
        public get returnTotalRecordCount(): boolean {
            return this._returnTotalRecordCount;
        }
        public set returnTotalRecordCount(value: boolean) {
            if (!Sdk.FetchXml.Util.isBooleanOrNull(value)) {
                throw new Error("Sdk.FetchXml.fetch.returnTotalRecordCount must be a boolean value or null.")
            }
            this._returnTotalRecordCount = value;
        }
        /**
        * Gets or sets the top attribute of the fetch element.
        */
        public get top(): number {
            return this._top;
        }
        public set top(value: number) {
            if (!Sdk.FetchXml.Util.isNumberOrNull(value)) {
                throw new Error("Sdk.FetchXml.fetch.top must be a number value or null.")
            }
            this._top = value;
        }
        /**
        * Gets or sets the utcOffset attribute of the fetch element.
        */
        public get utcOffset(): number {
            return this._utcOffset;
        }
        public set utcOffset(value: number) {
            if (!Sdk.FetchXml.Util.isNumberOrNull(value)) {
                throw new Error("Sdk.FetchXml.fetch.utcOffset must be a number value or null.")
            }
            this._utcOffset = value;
        }
        /**
        * Gets or sets the version attribute of the fetch element.
        */
        public get version(): string {
            return this._version;
        }
        public set version(value: string) {
            if (!Sdk.FetchXml.Util.isStringOrNull(value)) {
                throw new Error("Sdk.FetchXml.fetch.version must be a string value or null.")
            }
            this._version = value;
        }

        /** @description Sets the aggregate attribute of the fetch element
        * @param {boolean | null} aggregate The aggregate value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setAggregate(aggregate?: boolean) {
            (aggregate) ? this.aggregate = aggregate : this.aggregate = null;
            return this;
        }

        /** @description Sets the count attribute of the fetch element
        * @param {number | null} count The count value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setCount(count?: number) {
            (count) ? this.count = count : this.count = null;
            return this;
        }

        /** @description Sets the distinct attribute of the fetch element
        * @param {boolean | null} distinct The distinct value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setDistinct(distinct?: boolean) {
            (distinct) ? this.distinct = distinct : this.distinct = null;
            return this;
        }

        /** @description Sets the aggregate entity of the fetch element
        * @param {Sdk.FetchXml.entity} entity The entity value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setEntity(entity: Sdk.FetchXml.entity) {
            this.entity = entity;
            return this;
        }

        /** @description Sets the mapping attribute of the fetch element
        * @param {Sdk.FetchXml.Mapping} mapping The mapping value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setMapping(mapping?: Sdk.FetchXml.Mapping) {
            (mapping) ? this.mapping = mapping : this.mapping = null;
            return this;
        }

        /** @description Sets the minActiveRowVersion attribute of the fetch element
        * @param {boolean | null} minActiveRowVersion The minActiveRowVersion value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setMinActiveRowVersion(minActiveRowVersion?: boolean) {
            (minActiveRowVersion) ? this.minActiveRowVersion = minActiveRowVersion : this.minActiveRowVersion = null;
            return this;
        }

        /** @description Sets the noLock attribute of the fetch element
        * @param {boolean | null} noLock The noLock value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setNoLock(noLock: boolean = null) {
            this.noLock = noLock;
            return this;
        }

        /** @description Sets the order attribute of the fetch element
        * @param {Sdk.FetchXml.order | null} order The order value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setOrder(order: Sdk.FetchXml.order = null) {
            this.order = order;
            return this;
        }

        /** @description Sets the outputFormat attribute of the fetch element
        * @param {Sdk.FetchXml.OutputFormat | null} outputFormat The outputFormat value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setOutputFormat(outputFormat?: Sdk.FetchXml.OutputFormat) {
            (outputFormat) ? this.outputFormat = outputFormat : this.outputFormat = null;
            return this;
        }

        /** @description Sets the page attribute of the fetch element
        * @param {number | null} page The page value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setPage(page?: number) {
            (page) ? this.page = page : this.page = null;
            return this;
        }

        /** @description Sets the pagingCookie attribute of the fetch element
        * @param {string | null} pagingCookie The pagingCookie value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setPagingCookie(pagingCookie: string = null) {
            this.pagingCookie = pagingCookie;
            return this;
        }

        /** @description Sets the returnTotalRecordCount attribute of the fetch element
        * @param {boolean} returnTotalRecordCount The returnTotalRecordCount value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setReturnTotalRecordCount(returnTotalRecordCount?: boolean) {
            (returnTotalRecordCount) ? this.returnTotalRecordCount = returnTotalRecordCount : this.returnTotalRecordCount = null;
            return this;
        }

        /** @description Sets the top attribute of the fetch element
        * @param {number | null} top The top value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setTop(top?: number) {
            (top) ? this.top = top : this.top = null;
            return this;
        }

        /** @description Sets the utcOffset attribute of the fetch element
        * @param {number | null} utcOffset The utcOffset value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setUtcOffset(utcOffset?: number) {
            (utcOffset) ? this.utcOffset = utcOffset : this.utcOffset = null;
            return this;
        }

        /** @description Sets the version attribute of the fetch element
        * @param {string | null} version The version value to apply to the fetch element
        * @returns {Sdk.FetchXml.fetch}
        */
        public setVersion(version?: string) {
            (version) ? this.version = version : this.version = null;
            return this;
        }

        /**
        * Serializes the fetch query into a FetchXML string
        */
        public toXml(): string {

            var root = "<fetch />";
            var doc = new DOMParser().parseFromString(root, "text/xml");
            if (this.version) {
                doc.documentElement.setAttribute("version", <string>this.version)
            }
            if (this.outputFormat) {
                doc.documentElement.setAttribute("output-format", <string>this.outputFormat)
            }
            if (this.mapping) {
                doc.documentElement.setAttribute("mapping", <string>this.mapping)
            }
            if (this.aggregate) {
                doc.documentElement.setAttribute("aggregate", (this.aggregate) ? "true" : "false")
            }
            if (this.count) {
                doc.documentElement.setAttribute("count", this.count.toString())
            }
            if (this.distinct) {
                doc.documentElement.setAttribute("distinct", (this.distinct) ? "true" : "false")
            }
            if (this.entity) {
                doc.documentElement.appendChild(this.entity.toXml(doc));
            }

            if (this.minActiveRowVersion) {
                doc.documentElement.setAttribute("min-active-row-version", (this.minActiveRowVersion) ? "true" : "false")
            }
            if (this.noLock) {
                doc.documentElement.setAttribute("no-lock", (this.noLock) ? "true" : "false")
            }
            if (this.order) {
                doc.documentElement.appendChild(this.order.toXml(doc));
            }

            if (this.page) {
                doc.documentElement.setAttribute("page", this.page.toString())
            }
            if (this.pagingCookie) {
                doc.documentElement.setAttribute("paging-cookie", <string>this.pagingCookie) //Does this need special handling?
            }
            if (this.returnTotalRecordCount) {
                doc.documentElement.setAttribute("returntotalrecordcount", (this.returnTotalRecordCount) ? "true" : "false")
            }
            if (this.top) {
                doc.documentElement.setAttribute("top", this.top.toString())
            }
            if (this.utcOffset) {
                doc.documentElement.setAttribute("utc-offset", this.utcOffset.toString())
            }

            return new XMLSerializer().serializeToString(doc);
        }
        /**
         * Instantiates a fetch object from a fetchXml string
         * @param xml A FetchXML string
         * @returns Sdk.FetchXml.fetch
         */
        public static fromXml(xml: string) {
            var doc = new DOMParser().parseFromString(xml, "text/xml");
            var fetchObj = new Sdk.FetchXml.fetch();
            var errorMessage = "The XML string is not a valid fetchXML document";

            if (doc.documentElement.localName == "fetch") {

                Sdk.FetchXml.Util.parseAttributes(doc.documentElement, fetchObj, (fetchObj, name, value) => {
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
                });

                for (var i = 0; i < doc.documentElement.childNodes.length; i++) {

                    if (doc.documentElement.childNodes[i].nodeName == "entity") {
                        fetchObj.entity = Sdk.FetchXml.entity.entityFromXml(doc.documentElement.childNodes[i]);
                    }
                    if (doc.documentElement.childNodes[i].nodeName == "order") {
                        fetchObj.order = Sdk.FetchXml.order.orderFromXml(doc.documentElement.childNodes[i]);
                    }
                }

            }
            else {
                throw new Error(errorMessage);
            }

            return fetchObj;
        }

    }
    @sealed
    export class filter {
        /** @description Contains the data for a fetchXml filter element.
        * @param  [type] The type of filter: 'and' or 'or'. Default is 'and'
        * @param  [conditions] An array of Sdk.FetchXml.condition to apply to the filter
        * @param  [filters] An array of Sdk.FetchXml.filter to apply to the filter
        * @property  conditions Gets or sets the array of Sdk.FetchXml.condition to apply in the filter
        * @property  filters Gets or sets the array of Sdk.FetchXml.filter to apply to the filter
        * @property  type Gets or sets the type of filter.
        * @property  isQuickFindFields Gets or sets the isQuickFindFields property of the filter
        * @returns {Sdk.FetchXml.filter}
        */
        constructor(type?: string, conditions?: Array<condition>, filters?: Array<filter>) {
            //new keyword is not required in JS
            if (!(this instanceof filter))
            { return new filter(type, conditions, filters) }
            if (type)
                this.type = type;
            if (conditions)
                this.conditions = conditions;
            if (filters)
                this.filters = filters;
        }

        private _conditions: Array<condition> = [];
        private _filters: Array<filter> = [];
        private _type: FilterType = null;
        private _isQuickFindFields: boolean = null;

        /**
        * Gets or sets the array of condition to be applied to the query results
        */
        public get conditions(): Array<condition> {
            return this._conditions;
        }
        public set conditions(value: Array<condition>) {
            if (!Util.isFilterArrayOrNull(value)) {
                throw new Error("Sdk.FetchXml.filter.conditions must be an array of Sdk.FetchXml.condition or null.")
            }
            if (value == null) {
                this._conditions = [];
            } else {
                this._conditions = value;
            }
        }
        /**
        * Gets or sets the array of filters to be applied to the query results
        */
        public get filters(): Array<filter> {
            return this._filters;
        }
        public set filters(value: Array<filter>) {
            if (!Util.isFilterArrayOrNull(value)) {
                throw new Error("Sdk.FetchXml.filter.filters must be an array of Sdk.FetchXml.filter or null.")
            }
            if (value == null) {
                this._filters = [];
            } else {
                this._filters = value;
            }
        }
        /**
       * Gets or sets the type property of the filter
       */
        public get type(): FilterType {
            return this._type;
        }
        public set type(value: FilterType) {
            this._type = value;
        }
        /**
       * Gets or sets the isQuickFindFields property of the filter
       */
        public get isQuickFindFields(): boolean {
            return this._isQuickFindFields;
        }
        public set isQuickFindFields(value: boolean) {
            this._isQuickFindFields = value;
        }

        /** @description Adds a condition to the conditions collection
        * @param {Sdk.FetchXml.attribute | Sdk.FetchXml.condition} attributeOrCondition When Sdk.FetchXml.condition the condition is added. 
          When Sdk.FetchXml.attribute, the attribute property of a new condition
        * @param {Sdk.FetchXml.Operator} [operator] The operator property for a new condition. Required when the first parameter is an Sdk.FetchXml.attribute
        * @param {Array} [values] The values to compare for a new condition.
        * @returns {Sdk.FetchXml.filter}
        */
        public addCondition(attributeOrCondition: any, operator?, values?) {
            if (Util.isCondition(attributeOrCondition)) {
                this.conditions.push(attributeOrCondition);
            }
            else {
                this.conditions.push(new condition(attributeOrCondition, operator, values));
            }

            return this;
        }

        /** @description Removes a condition from the conditions collection by reference
        * @param {Sdk.FetchXml.condition} condition The condition to remove from the conditions collection
        * @returns {Sdk.FetchXml.filter}
        */
        public removeConditionByRef(condition) {
            if (!Util.isCondition(condition)) {
                throw new Error("Sdk.FetchXml.filter removeConditionByRef method condition parameter must be an Sdk.FetchXml.condition.")
            }
            Util.removeCollectionValueByRef(this.conditions, condition);

            return this;
        }

        /** @description Removes a condition from the conditions collection by value
        * @param {Sdk.FetchXml.condition} condition The condition to remove from the conditions collection
        * @returns {Sdk.FetchXml.filter}
        */
        public removeCondition(condition) {
            if (!Util.isCondition(condition)) {
                throw new Error("Sdk.FetchXml.filter removeCondition method condition parameter must be an Sdk.FetchXml.condition.")
            }
            Util.removeCollectionValue(this.conditions, condition);

            return this;
        }

        /** @description Adds a filter to the filters collection
        * @param {Sdk.FetchXml.filter} filter The filter to add to the filters collectio
        * @returns {Sdk.FetchXml.filter}
        */
        public addFilter(filter) {
            if (Util.isFilter(filter)) {
                this.filters.push(filter);

            } else {
                throw new Error("Sdk.FetchXml.filter addFilter method filter parameter must be a Sdk.FetchXml.filter value.")
            }
            return this;
        }

        /** @description Removes all references to a filter object
        * @param {Sdk.FetchXml.filter} filter The filter to remove from the filters collectio
        * @returns {Sdk.FetchXml.filter}
        */
        public removeFilterByRef(filter) {
            if (!Util.isFilter(filter)) {
                throw new Error("Sdk.FetchXml.filter removeFilterByRef method filter parameter must be an Sdk.FetchXml.filter.")
            }
            Util.removeCollectionValueByRef(this.filters, filter);

            return this;
        }

        /** @description Removes all matching filters from the filters collection
        * @param {Sdk.FetchXml.filter} filter The filter to remove from the filters collectio
        * @returns {Sdk.FetchXml.filter}
        */
        public removeFilter(filter) {
            if (!Util.isFilter(filter)) {
                throw new Error("Sdk.FetchXml.filter removeFilter method filter parameter must be an Sdk.FetchXml.filter.")
            }
            Util.removeCollectionValue(this.filters, filter);

            return this;
        }

        /** @description Sets the isQuickFindFields property
        * @param {boolean | null} value The value to set
        * @returns {Sdk.FetchXml.filter}
        */
        public setIsQuickFindFields(value) {
            this.isQuickFindFields = value;
            return this;
        }

        /** @description Sets the type property
        * @param {Sdk.FetchXml.FilterType} value The value to set
        * @returns {Sdk.FetchXml.filter}
        */
        public setType(value) {
            this.type = value;
            return this;
        }

        //Internal use only
        toXml(doc: XMLDocument): Node {
            var fNode = doc.createElement("filter");
            if (this.type) {
                fNode.setAttribute("type", <string>this.type)
            }
            if (Util.isBoolean(this.isQuickFindFields)) {
                fNode.setAttribute("isquickfindfields", this.isQuickFindFields.toString())
            }
            this.conditions.forEach(function (c) {
                fNode.appendChild(c.toXml(doc));
            })
            this.filters.forEach(function (f) {
                fNode.appendChild(f.toXml(doc));
            })
            return fNode;
        }

        static filterFromXml(xml) {
            var filterObj = new filter();

            Util.parseAttributes(xml, filterObj, (filterObj, name, value) => {
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
            });



            for (var i = 0; i < xml.childNodes.length; i++) {

                if (xml.childNodes[i].nodeName == "condition") {
                    filterObj.addCondition(condition.conditionFromXml(xml.childNodes[i]));
                }

                if (xml.childNodes[i].nodeName == "filter") {
                    filterObj.addFilter(filter.filterFromXml(xml.childNodes[i]));
                }

            }

            return filterObj;
        }

    }
    @sealed
    export class linkEntity {
        /**
         * Contains the data for a fetchXml link-entity element.
         * @param name The logical name of the entity
         * @param from The from property of the linkEntity
         * @param to The to property of the linkEntity
         * @param linktype The linktype property of the linkEntity
         * @param alias The alias property of the linkEntity
         */
        constructor(name: string, from?: string, to?: string, linktype?: string, alias?: string) {
            if (!(this instanceof linkEntity))
            { return new linkEntity(name, from, to, linktype, alias) }

            this.name = name;
            if (from)
                this.from = from;
            if (to)
                this.to = to;
            if (linktype)
                this.linktype = linktype;
            if (alias)
                this.alias = alias;
        }

        private _name: string = null;
        private _alias: string = null;
        private _from: string = null;
        private _intersect: boolean = null;
        private _linktype: string = null;
        private _to: string = null;
        private _visible: boolean = null;
        private _allAttributes: boolean = null;
        private _attributes: Array<attribute> = [];
        private _orders: Array<order> = [];
        private _linkEntities: Array<linkEntity> = [];
        private _filters: Array<filter> = [];

        /**
        *  Gets or sets the name property of the linkEntity
        */
        public get name(): string {
            return this._name;
        }
        public set name(value: string) {
            this._name = value;
        }
        /**
        * Gets or sets the alias property of the linkEntity
        */
        public get alias(): string {
            return this._alias;
        }
        public set alias(value: string) {
            this._alias = value;
        }
        /**
        * Gets or sets the from property of the linkEntity
        */
        public get from(): string {
            return this._from;
        }
        public set from(value: string) {
            this._from = value;
        }
        /**
        * Gets or sets the intersect property of the linkEntity
        */
        public get intersect(): boolean {
            return this._intersect;
        }
        public set intersect(value: boolean) {
            this._intersect = value;
        }
        /**
        * Gets or sets the linktype property of the linkEntity
        */
        public get linktype(): string {
            return this._linktype;
        }
        public set linktype(value: string) {
            this._linktype = value;
        }
        /**
        * Gets or sets the to property of the linkEntity
        */
        public get to(): string {
            return this._to;
        }
        public set to(value: string) {
            this._to = value;
        }
        /**
        * Gets or sets the visible property of the linkEntity
        */
        public get visible(): boolean {
            return this._visible;
        }
        public set visible(value: boolean) {
            this._visible = value;
        }
        /**
        * Gets or sets the allAttributes property of the linkEntity
        */
        public get allAttributes(): boolean {
            return this._allAttributes;
        }
        public set allAttributes(value: boolean) {
            this._allAttributes = value;
        }
        /**
        * Gets or sets the array of attribute of the entity to be returned in the query results
        */
        public get attributes(): Array<attribute> {
            return this._attributes;
        }
        public set attributes(value: Array<attribute>) {
            if (!Util.isAttributeArrayOrNull(value)) {
                throw new Error("Sdk.FetchXml.linkEntity.attributes must be an array of Sdk.FetchXml.attribute or null.")
            }
            if (value == null) {
                this._attributes = [];
            } else {
                this._attributes = value;
            }

        }
        /**
        * Gets or sets the array of attribute of the entity to be returned in the query results
        */
        public get orders(): Array<order> {
            return this._orders;
        }
        public set orders(value: Array<order>) {
            if (!Util.isOrderArrayOrNull(value)) {
                throw new Error("Sdk.FetchXml.linkEntity.orders must be an array of Sdk.FetchXml.order or null.")
            }
            if (value == null) {
                this._orders = [];
            } else {
                this._orders = value;
            }

        }
        /**
        * Gets or sets the array of linkEntity to be applied to the query results
        */
        public get linkEntities(): Array<linkEntity> {
            return this._linkEntities;
        }
        public set linkEntities(value: Array<linkEntity>) {
            if (!Util.isLinkEntityArrayOrNull(value)) {
                throw new Error("Sdk.FetchXml.linkEntity.linkEntities must be an array of Sdk.FetchXml.linkEntity or null.")
            }
            if (value == null) {
                this._linkEntities = [];
            } else {
                this._linkEntities = value;
            }
        }
        /**
        * Gets or sets the array of filters to be applied to the query results
        */
        public get filters(): Array<filter> {
            return this._filters;
        }
        public set filters(value: Array<filter>) {
            if (!Util.isFilterArrayOrNull(value)) {
                throw new Error("Sdk.FetchXml.linkEntity.filters must be an array of Sdk.FetchXml.filter or null.")
            }
            if (value == null) {
                this._filters = [];
            } else {
                this._filters = value;
            }

        }
        //Internal use only
        public get hash(): string {
            var s = this._name.concat(
                (this._alias ? this._alias : ""),
                (this._from ? this._from : ""),
                (Util.isNullOrUndefined(this._intersect) ? "" : this._intersect.toString()),
                (this._linktype ? this._linktype : ""),
                (this._to ? this._to : ""),
                (Util.isNullOrUndefined(this._visible) ? "" : this._visible.toString()),
                (Util.isNullOrUndefined(this._allAttributes) ? "" : this._allAttributes.toString()),
                (Util.getCollectionHash(this._attributes)),
                (Util.getCollectionHash(this._orders)),
                (Util.getCollectionHash(this._linkEntities)),
                (Util.getCollectionHash(this._filters))
            );
            return s.hashCode();
        }

        /** @description Sets the alias property of the linkEntity attribute
        * @param {string} alias The alias value to apply to the linkEntity
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public setAlias(alias) {
            this.alias = alias;
            return this;
        }

        /** @description Sets the from property of the linkEntity attribute
        * @param {string} from The from value to apply to the linkEntity
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public setFrom(from) {
            this.from = from;
            return this;
        }

        /** @description Sets the intersect property of the linkEntity attribute
        * @param {boolean | null} intersect The intersect value to apply to the linkEntity
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public setIntersect(intersect) {
            this.intersect = intersect;
            return this;
        }

        /** @description Sets the name property of the linkEntity attribute
            * @param {string} name The name value to apply to the linkEntity
            * @returns {Sdk.FetchXml.linkEntity}
            */
        public setName(name) {
            this.name = name;
            return this;
        }

        /** @description Sets the to property of the linkEntity attribute
            * @param {string} to The to value to apply to the linkEntity
            * @returns {Sdk.FetchXml.linkEntity}
            */
        public setTo(to) {
            this.to = to;
            return this;
        }

        /** @description Sets the visible property of the linkEntity attribute
        * @param {boolean | null} visible The visible value to apply to the linkEntity
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public setVisible(visible) {
            this.visible = visible;
            return this;
        }

        /** @description Sets the allAttributes property of the linkEntity attribute
        * @param {boolean} allAttributes The allAttributes value to apply to the linkEntity
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public setAllAttributes(allAttributes) {
            this.allAttributes = allAttributes;
            return this;
        }

        /** @description Adds an linkEntity to the linkEntities collection
        * @param {Sdk.FetchXml.linkEntity} linkEntity The linkEntity to add to the linkEntities collection
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public addLinkEntity(linkEntity) {
            if (Util.isLinkEntity(linkEntity)) {
                this.linkEntities.push(linkEntity);
                return this;
            }
            throw new Error("Sdk.FetchXml.linkEntity addLinkEntity method linkEntity parameter must be a Sdk.FetchXml.linkEntity value.")

            return this;
        }

        /** @description Removes a linkEntity from the linkEntities collection by reference
        * @param {Sdk.FetchXml.linkEntity} linkEntity The linkEntity to remove from the linkEntities collection
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public removeLinkEntityByRef(linkEntity) {
            if (!Util.isLinkEntity(linkEntity)) {
                throw new Error("Sdk.FetchXml.linkEntity removeLinkEntityByRef method linkEntity parameter must be an Sdk.FetchXml.linkEntity.")
            }
            Util.removeCollectionValueByRef(this.linkEntities, linkEntity);

            return this;
        }

        /** @description Removes a linkEntity from the linkEntities collection by value
        * @param {Sdk.FetchXml.linkEntity} linkEntity The linkEntity to remove from the linkEntities collection
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public removeLinkEntity(linkEntity) {
            if (!Util.isLinkEntity(linkEntity)) {
                throw new Error("Sdk.FetchXml.linkEntity removeLinkEntity method linkEntity parameter must be an Sdk.FetchXml.linkEntity.")
            }
            Util.removeCollectionValue(this.linkEntities, linkEntity);

            return this;
        }

        /** @description Adds an attribute to the attributes collection
        * @param {Sdk.FetchXml.attribute | string} attribute The attribute to add to the attributes collectio
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public addAttribute(attribute) {
            if (Util.isAttribute(attribute)) {
                this.attributes.push(attribute);
                return this;
            }
            if (Util.isString(attribute)) {
                this.attributes.push(new attribute(attribute));
                return this;
            }
            throw new Error("Sdk.FetchXml.linkEntity addAttribute method attribute parameter must be a Sdk.FetchXml.attribute value or a string.")

            return this;
        }

        /** @description Removes a attribute from the attributes collection by reference
        * @param {Sdk.FetchXml.attribute} attribute The attribute to remove from the attributes collection
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public removeAttributeByRef(attribute) {
            if (!Util.isAttribute(attribute)) {
                throw new Error("Sdk.FetchXml.linkEntity removeAttributeByRef method attribute parameter must be an Sdk.FetchXml.attribute.")
            }
            Util.removeCollectionValueByRef(this.attributes, attribute);

            return this;
        }

        /** @description Removes a attribute from the attributes collection by value
        * @param {Sdk.FetchXml.attribute} attribute The attribute to remove from the attributes collection
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public removeAttribute(attribute) {
            if (!Util.isAttribute(attribute)) {
                throw new Error("Sdk.FetchXml.linkEntity removeAttribute method attribute parameter must be an Sdk.FetchXml.attribute.")
            }
            Util.removeCollectionValue(this.attributes, attribute);

            return this;
        }

        /** @description Removes a attribute from the attributes collection by name
        * @param {string} attributeName Name of the attribute to remove from the attributes collection
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public removeAttributeByName(attributeName) {
            if (!Util.isString(attributeName)) {
                throw new Error("Sdk.FetchXml.linkEntity removeAttributeByName method attributeName parameter must be a string.")
            }
            Util.removeCollectionValueByProperty(this.attributes, "name", attributeName)
            return this;
        }

        /** @description Adds an order to the orders collection
        * @param {Sdk.FetchXml.order | string} orderOrAttribute The order to add to the attributes collection or the Attribute property of a new order to create
        * @param {boolean} [descending] Whether the order is descending. True if descending, otherwise false
        * @param {string} [alias] The alias to set for the order
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public addOrder(orderOrAttribute: any, descending?, alias?) {
            if (Util.isOrder(orderOrAttribute)) {
                this.orders.push(orderOrAttribute);
                return this;
            }
            if (Util.isString(orderOrAttribute)) {
                this.orders.push(new order(orderOrAttribute, descending, alias));
                return this;
            }
            throw new Error("Sdk.FetchXml.linkEntity addOrder method orderOrAttribute parameter must be a Sdk.FetchXml.order value or a string.")

            return this;
        }

        /** @description Removes a order from the orders collection by reference
        * @param {Sdk.FetchXml.order} order The order to remove from the orders collection
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public removeOrderByRef(order) {
            if (!Util.isOrder(order)) {
                throw new Error("Sdk.FetchXml.linkEntity removeOrderByRef method order parameter must be an Sdk.FetchXml.order.")
            }
            Util.removeCollectionValueByRef(this.orders, order);
            return this;
        }

        /** @description Removes a order from the orders collection by value
        * @param {Sdk.FetchXml.order} order The order to remove from the orders collection
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public removeOrder(order) {
            if (!Util.isOrder(order)) {
                throw new Error("Sdk.FetchXml.linkEntity removeOrder method order parameter must be an Sdk.FetchXml.order.")
            }
            Util.removeCollectionValue(this.orders, order);
            return this;
        }

        /** @description Adds an filter to the filters collection
        * @param {Sdk.FetchXml.filter} filter The filter to add to the filters collection
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public addFilter(filter) {
            if (Util.isFilter(filter)) {
                this.filters.push(filter);
                return this;
            }

            throw new Error("Sdk.FetchXml.linkEntity addFilter method filter parameter must be a Sdk.FetchXml.filter value.")

            return this;
        }

        /** @description Removes a filter from the filters collection by reference
        * @param {Sdk.FetchXml.filter} filter The filter to remove from the filters collection
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public removeFilterByRef(filter) {
            if (!Util.isFilter(filter)) {
                throw new Error("Sdk.FetchXml.linkEntity removeFilterByRef method filter parameter must be an Sdk.FetchXml.filter.")
            }
            Util.removeCollectionValueByRef(this.filters, filter);

            return this;
        }

        /** @description Removes a filter from the filters collection by value
        * @param {Sdk.FetchXml.filter} filter The filter to remove from the filters collection
        * @returns {Sdk.FetchXml.linkEntity}
        */
        public removeFilter(filter) {
            if (!Util.isFilter(filter)) {
                throw new Error("Sdk.FetchXml.linkEntity removeFilter method filter parameter must be an Sdk.FetchXml.filter.")
            }
            Util.removeCollectionValue(this.filters, filter);

            return this;
        }

        //Internal use only
        toXml(doc: XMLDocument): Node {

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
            if (Util.isBoolean(this.intersect)) {
                leNode.setAttribute("intersect", this.intersect.toString())
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
            if (Util.isBoolean(this.visible)) {
                leNode.setAttribute("visible", this.visible.toString())
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

        static linkEntityFromXml(xml) {
            var name = xml.attributes.getNamedItem("name").nodeValue;
            var linkEntityObj = new linkEntity(name);
            linkEntityObj.allAttributes = (xml.getElementsByTagName("all-attributes").length == 1);

            Util.parseAttributes(xml, linkEntityObj, (linkEntityObj, name, value) => {
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
            });

            for (var i = 0; i < xml.childNodes.length; i++) {

                if (xml.childNodes[i].nodeName == "attribute") {
                    linkEntityObj.addAttribute(attribute.attributeFromXml(xml.childNodes[i]));
                }

                if (xml.childNodes[i].nodeName == "order") {
                    linkEntityObj.addOrder(order.orderFromXml(xml.childNodes[i]));
                }

                if (xml.childNodes[i].nodeName == "filter") {
                    linkEntityObj.addFilter(filter.filterFromXml(xml.childNodes[i]));
                }

                if (xml.childNodes[i].nodeName == "link-entity") {
                    linkEntityObj.addLinkEntity(linkEntity.linkEntityFromXml(xml.childNodes[i]));
                }
            }

            return linkEntityObj;
        }


    }
    @sealed
    export class order {
        /**
         * Contains the data for a fetchXml order element.
         * @param attribute The logical name of the attribute
         * @param descending Whether the order is decending. Default is false
         * @param alias The alias to apply to the order
         */
        constructor(attribute?: string, descending?: boolean, alias?: string) {
            // new keyword not required in JS
            if (!(this instanceof order))
            { return new order(attribute, descending, alias) }

            if (attribute)
                this.attribute = attribute;
            if (descending)
                this.descending = descending;
            if (alias)
                this.alias = alias;
        }

        private _attribute: string = null;
        private _descending: boolean = null;
        private _alias: string = null;

        /**
        * Gets or sets logical name of the attribute
        */
        public get attribute(): string {
            return this._attribute;
        }
        public set attribute(value: string) {
            this._attribute = value;
        }
        /**
        *Gets or sets whether the order is descending. Default is false
        */
        public get descending(): boolean {
            return this._descending;
        }
        public set descending(value: boolean) {
            this._descending = value;
        }
        /**
        * Gets or sets the alias property of the order
        */
        public get alias(): string {
            return this._alias;
        }
        public set alias(value: string) {
            this._alias = value;
        }
        //Internal use only
        public get hash(): string {
            var s = "".concat(
                (this._attribute ? this._attribute : ""),
                (this._alias ? this._alias : ""),
                this._descending.toString());
            return s.hashCode();
        }

        /** @description Sets the attribute property of the order attribute
        * @param {string} attribute The attribute value to apply to the order
        * @returns {Sdk.FetchXml.order}
        */
        public setAttribute(attribute) {
            this.attribute = attribute;
            return this;
        }

        /** @description Sets the alias property of the order attribute
        * @param {string} alias The alias value to apply to the order
        * @returns {Sdk.FetchXml.order}
        */
        public setAlias(alias) {
            this.alias = alias;
            return this;
        }

        /** @description Sets the descending property of the order attribute
           * @param {boolean | null} descending The descending value to apply to the order
           * @returns {Sdk.FetchXml.order}
           */
        public setDescending(descending) {
            this.descending = descending;
            return this;
        }

        //Internal use only
        toXml(doc: XMLDocument): Node {
            var orderNode = doc.createElement("order");
            if (this.attribute) {
                orderNode.setAttribute("attribute", this.attribute)
            }
            if (this.alias) {
                orderNode.setAttribute("alias", this.alias)
            }
            if (!Util.isNullOrUndefined(this.descending)) {
                orderNode.setAttribute("descending", this.descending.toString())
            }
            return orderNode;
        }


        static orderFromXml(xml) {
            var orderObj = new order();
            Util.parseAttributes(xml, orderObj, (orderObj, name, value) => {
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
            });
            return orderObj;
        }
    }
    @sealed
    export class value {
        /**
         * Contains the data for a fetchXml value element.
         * @param  value The the value of the value
         * @param [uiname] The uiname for the value
         * @param [uitype] The uitype for the value
         */
        constructor(value: any, uiname?: string, uitype?: string) {
            //New keyword not required in JS
            if (!(this instanceof Sdk.FetchXml.value))
            { return new value(value, uiname, uitype) }

            if (value)
                this.value = value;
            if (uiname)
                this.uiname = uiname;
            if (uitype)
                this.uitype = uitype;
        }

        private _value: any = null;
        private _uiname: string = null;
        private _uitype: string = null;


        /**
       * Gets or sets the  value for the value.
       */
        public get value(): any {
            return this._value;
        }
        public set value(value: any) {
            this._value = value;
        }
        /**
       * Gets or sets the uiname to apply to the value
       */
        public get uiname(): string {
            return this._uiname;
        }
        public set uiname(value: string) {
            this._uiname = value;
        }
        /**
       * Gets or sets the uitype to apply to the value
       */
        public get uitype(): string {
            return this._uitype;
        }
        public set uitype(value: string) {
            this._uitype = value;
        }

        /** @description Sets the value to apply in the value
        * @param {string} value The value to apply in the value
        * @returns {Sdk.FetchXml.value}
        */
        public setValue(value) {
            this.value = value;
            return this;
        }

        /** @description Sets the uiname to apply in the value
        * @param {string} uiname The uiname to apply in the value
        * @returns {Sdk.FetchXml.value}
        */
        public setUIname(value) {
            this.uiname = value;
            return this;
        }

        /** @description Sets the uitype to apply in the value
        * @param {string} uitype The uitype to apply in the value
        * @returns {Sdk.FetchXml.value}
        */
        public setUItype(value) {
            this.uitype = value;
            return this;
        }

        //Internal use only
        toXml(doc: XMLDocument): Node {

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

        static valueFromXml(xml) {

            var valueObj = new value(xml.textContent);
            Util.parseAttributes(xml, valueObj, (object, name, value) => {
                switch (name) {
                    case "uiname":
                    case "uitype":
                        object[name] = value;
                        break;
                }
            });

            return valueObj;
        }

    }
    export class Util {
        public static isBoolean(obj) {
            return (typeof obj === "boolean");
        }
        public static isBooleanOrNull(obj) {
            return (Util.isNull(obj) || Util.isBoolean(obj))
        }
        public static isNumber(obj) {
            return (typeof (obj) === "number");
        }
        public static isNumberOrNull(obj) {
            return (Util.isNull(obj) || Util.isNumber(obj))
        }
        public static isNull(obj) {
            return (obj === null);
        }
        public static isNullOrUndefined(obj) {
            return (obj === null || typeof obj == "undefined");
        }
        public static isEnumMember(enumType, obj) {
            for (var i in enumType) {
                if (obj === enumType[i]) {
                    return true;
                }
            }
            return false;
        }
        public static isEnumMemberOrNull(enumType, obj) {
            return (Util.isNull(obj) || Util.isEnumMember(enumType, obj));
        }
        public static isString(obj) {
            return (typeof obj === "string");
        }
        public static isStringOrNull(obj) {
            return (Util.isNull(obj) || Util.isString(obj));
        }
        public static isOrder(obj) {
            return (obj instanceof order)
        }
        public static isOrderOrNull(obj) {
            return (Util.isNull(obj) || Util.isOrder(obj));
        }
        public static isOrderArray(obj) {
            if (Array.isArray(obj)) {
                obj.forEach(function (item) {
                    if (!Util.isOrder(item)) {
                        return false;
                    }
                })
                return true;
            }
            return false;
        }
        public static isOrderArrayOrNull(obj) {
            return (Util.isNull(obj) || Util.isOrderArray(obj));
        }
        public static isEntity(obj) {
            return (obj instanceof entity)
        }
        public static isAttribute(obj) {
            return (obj instanceof attribute)
        }
        public static isAttributeArray(obj) {
            if (Array.isArray(obj)) {
                obj.forEach(function (item) {
                    if (!Util.isAttribute(item)) {
                        return false;
                    }
                })
                return true;
            }
            return false;
        }
        public static isAttributeArrayOrNull(obj) {
            return (Util.isNull(obj) || Util.isAttributeArray(obj));
        }
        public static isLinkEntity(obj) {
            return (obj instanceof linkEntity)
        }
        public static isLinkEntityOrNull(obj) {
            return (Util.isNull(obj) || Util.isLinkEntity(obj));
        }
        public static isLinkEntityArray(obj) {
            if (Array.isArray(obj)) {
                obj.forEach(function (item) {
                    if (!Util.isLinkEntity(item)) {
                        return false;
                    }
                })
                return true;
            }
            return false;
        }
        public static isLinkEntityArrayOrNull(obj) {
            return (Util.isNull(obj) || Util.isLinkEntityArray(obj));
        }
        public static isFilter(obj) {
            return (obj instanceof filter)
        }
        public static isFilterOrNull(obj) {
            return (Util.isNull(obj) || Util.isFilter(obj));
        }
        public static isFilterArray(obj) {
            if (Array.isArray(obj)) {
                obj.forEach(function (item) {
                    if (!Util.isFilter(item)) {
                        return false;
                    }
                })
                return true;
            }
            return false;
        }
        public static isFilterArrayOrNull(obj) {
            return (Util.isNull(obj) || Util.isFilterArray(obj));
        }
        public static isCondition(obj) {
            return (obj instanceof condition)
        }
        public static isConditionOrNull(obj) {
            return (Util.isNull(obj) || Util.isCondition(obj));
        }
        public static isConditionArray(obj) {
            if (Array.isArray(obj)) {
                obj.forEach(function (item) {
                    if (!Util.isCondition(item)) {
                        return false;
                    }
                })
                return true;
            }
            return false;
        }
        public static isConditionArrayOrNull(obj) {
            return (Util.isNull(obj) || Util.isConditionArray(obj));
        }
        public static isValue(obj) {
            return (obj instanceof value)
        }
        public static isValueOrNull(obj) {
            return (Util.isNull(obj) || Util.isValue(obj));
        }
        public static isValueArray(obj) {
            if (Array.isArray(obj)) {
                var returnValue = true;
                obj.forEach(function (item) {
                    if (!Util.isValue(item)) {
                        returnValue = false;
                    }
                })
                return returnValue;
            }
            return false;
        }
        public static isValueArrayOrNull(obj) {
            return (Util.isNull(obj) || Util.isValueArray(obj));
        }
        public static getEnumNameFromValue(enumtype, value) {
            for (var i in enumtype) {
                if (enumtype[i] == value) {
                    return i;
                }
            }
        }
        public static getCollectionHash(collection) {
            var ch = [];
            collection.forEach(function (c) {
                ch.push(c.hash)
            });
            return ch.join();
        }
        public static removeCollectionValue(collection, value) {
            Util.removeCollectionValueByProperty(collection, "hash", value)
        }
        public static removeCollectionValueByProperty(collection, propertyName, value) {
            var matches = [];
            collection.forEach(function (b, i) {
                //Check if same values
                if (b[propertyName] == value[propertyName]) {
                    matches.push(b);
                }
            });
            matches.forEach(function (m) {
                Util.removeCollectionValueByRef(collection, m);
            });

        }
        public static removeCollectionValueByRef(collection, value) {
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
        public static convertFetchBoolType(value) {
            switch (value) {
                case "true":
                case "1":
                    return true;
                case "false":
                case "0":
                    return false;
                default:
                    throw new Error("Unexpected FetchBoolType value");
                    break;
            }
        }
        public static parseAttributes(xml: Node, object: Object, switchFunction: Function) {
            var atts = xml.attributes;
            for (var i = 0; i < atts.length; i++) {
                var name = atts[i].nodeName;
                var value = atts[i].nodeValue;
                switchFunction(object, name, value)
            }
        }
    }
    @frozen
    export class Mapping {
        static Internal = "internal";
        static Logical = "logical";
    }
    @frozen
    export class OutputFormat {
        static Ado = "xml-ado";
        static Auto = "xml-auto";
        static Elements = "xml-elements";
        static Raw = "xml-raw";
        static Platform = "xml-platform";
    }
    @frozen
    export class Build {

        static OnePoint504021 = "1.504021";
        static OnePoint003017 = "1.003017";
    }
    @frozen
    export class Aggregate {
        static Count = "count";
        static CountColumn = "countcolumn";
        static Sum = "sum";
        static Avg = "avg";
        static Min = "min";
        static Max = "max";
    }
    @frozen
    export class RowAggregate {
        static Countchildren = "countchildren";
    }
    @frozen
    export class DateGrouping {
        static Day = "day";
        static Week = "week";
        static Month = "month";
        static Quarter = "quarter";
        static Year = "year";
        static FiscalPeriod = "fiscal-period";
        static FiscalYear = "fiscal-year";
    }
    @frozen
    export class Operator {
        /** Returns all records in referenced record's hierarchical ancestry line.*/
        static Above = "above";
        /** The string occurs at the beginning of another string.*/
        static BeginsWith = "begins-with";
        /** The value is between two values.*/
        static Between = "between";
        /** The string ends with another string.*/
        static EndsWith = "ends-with";
        /** The values are compared for equality. */
        static Equal = "eq";
        /** The value is equal to the specified business ID. */
        static EqualBusinessId = "eq-businessid";
        /** Returns the referenced record and all records above it in the hierarchy.*/
        static EqualOrAbove = "eq-or-above";
        /** Returns the referenced record and all records below it in the hierarchy.*/
        static EqualOrUnder = "eq-or-under";
        /** The value is equal to the specified user ID.*/
        static EqualUserId = "eq-userid";
        /** The value is equal to the language for the user. */
        static EqualUserLanguage = "eq-userlanguage";
        /** When hierarchical security models are used; Equals current user or his reporting hierarchy*/
        static EqualUserOrUserHierarchy = "eq-useroruserhierarchy";
        /** When hierarchical security models are used; Equals current user and his teams or his reporting hierarchy and their teams*/
        static EqualUserOrUserHierarchyAndTeams = "eq-useroruserhierarchyandteams";
        /** The record is owned by a user or teams that the user is a member of.*/
        static EqualUserOrUserTeams = "eq-useroruserteams";
        /** The record is owned by teams that the user is a member of.*/
        static EqualUserTeams = "eq-userteams";
        /** The value is greater than or equal to the compared value.*/
        static GreaterOrEqual = "ge";
        /** The value is greater than the compared value.*/
        static GreaterThan = "gt";
        /** The value exists in a list of values.*/
        static In = "in";
        /** The value is within the specified fiscal period.*/
        static InFiscalPeriod = "in-fiscal-period";
        /** The value is within the specified fiscal period and year.*/
        static InFiscalPeriodAndYear = "in-fiscal-period-and-year";
        /** The value is within the specified year.*/
        static InFiscalYear = "in-fiscal-year";
        /** The value is within or after the specified fiscal period and year.*/
        static InOrAfterFiscalPeriodAndYear = "in-or-after-fiscal-period-and-year";
        /** The value is within or before the specified fiscal period and year.*/
        static InOrBeforeFiscalPeriodAndYear = "in-or-before-fiscal-period-and-year";
        /** The value is within the last fiscal period.*/
        static LastFiscalPeriod = "last-fiscal-period";
        /** The value is within the last fiscal year.*/
        static LastFiscalYear = "last-fiscal-year";
        /** The value is within the last month*/
        static LastMonth = "last-month";
        /** The value is within last seven days.*/
        static LastSevenDays = "last-seven-days";
        /** The value is within the previous week*/
        static LastWeek = "last-week";
        /** The value is within last X days.*/
        static LastXDays = "last-x-days";
        /** The value is within the last X fiscal periods.*/
        static LastXFiscalPeriods = "last-x-fiscal-periods";
        /** The value is within the last X fiscal years.*/
        static LastXFiscalYears = "last-x-fiscal-years";
        /** The value is within the last X hours.*/
        static LastXHours = "last-x-hours";
        /** The value is within the last X months.*/
        static LastXMonths = "last-x-months";
        /** The value is within the last X weeks.*/
        static LastXWeeks = "last-x-weeks";
        /** The value is within the last X years.*/
        static LastXYears = "last-x-years";
        /** The value is within the last year.*/
        static LastYear = "last-year";
        /** The value is less than or equal to the compared value.*/
        static LessOrEqual = "le";
        /** The character string is matched to the specified pattern.*/
        static Like = "like";
        /** The value is less than the compared value.*/
        static LessThan = "lt";
        /** The two values are not equal.*/
        static NotEqual = "ne";
        /** The value is not equal to the specified business ID.*/
        static NotEqualBusinessId = "ne-businessid";
        /** The value is not equal to the specified user ID.*/
        static NotEqualUserId = "ne-userid";
        /** Not Equal To*/
        static Neq = "neq"; //Is this the same as 'ne'?
        /** The value is within the next fiscal period.*/
        static NextFiscalPeriod = "next-fiscal-period";
        /** The value is within the next fiscal year.*/
        static NextFiscalYear = "next-fiscal-year";
        /** The value is within the next month.*/
        static NextMonth = "next-month";
        /** The value is within the next seven days.*/
        static NextSevenDays = "next-seven-days";
        /** The value is within the next week.*/
        static NextWeek = "next-week";
        /** The value is within the X days.*/
        static NextXDays = "next-x-days";
        /** The value is within the next X fiscal periods.*/
        static NextXFiscalPeriods = "next-x-fiscal-periods";
        /** The value is within the next X fiscal years.*/
        static NextXFiscalYears = "next-x-fiscal-years";
        /** The value is within the next X hours.*/
        static NextXHours = "next-x-hours";
        /** The value is within the next X nonths.*/
        static NextXMonths = "next-x-months";
        /** The value is within the next X weeks.*/
        static NextXWeeks = "next-x-weeks";
        /** The value is within the next X years.*/
        static NextXYears = "next-x-years";
        /** The value is within the next year.*/
        static NextYear = "next-year";
        /** The string does not begin with another string.*/
        static NotBeginWith = "not-begin-with";
        /** The value is not between two values.*/
        static NotBetween = "not-between";
        /** The string does not end with another string.*/
        static NotEndWith = "not-end-with";
        /** The given value is not matched to a value in a subquery or a list.*/
        static NotIn = "not-in";
        /** The character string does not match the specified pattern.*/
        static NotLike = "not-like";
        /** The value is not null.*/
        static NotNull = "not-null";
        /** Returns all records not below the referenced record in the hierarchy*/
        static NotUnder = "not-under";
        /** The value is null.*/
        static Null = "null";
        /** The value is older than the specified number of days. */
        static OlderThanXDays = "olderthan-x-days";
        /** The value is older than the specified number of hours. */
        static OlderThanXHours = "olderthan-x-hours";
        /** The value is older than the specified number of minutes. */
        static OlderThanXMinutes = "olderthan-x-minutes";
        /** The value is older than the specified number of months. */
        static OlderThanXMonths = "olderthan-x-months";
        /** The value is older than the specified number of weeks. */
        static OlderThanXWeeks = "olderthan-x-weeks";
        /** The value is older than the specified number of years. */
        static OlderThanXYears = "olderthan-x-years";
        /** 	The value is on a specified date.*/
        static On = "on";
        /** The value is on or after a specified date.*/
        static OnOrAfter = "on-or-after";
        /** The value is on or before a specified date.*/
        static OnOrBefore = "on-or-before";
        /** 	The value is within the current fiscal period.*/
        static ThisFiscalPeriod = "this-fiscal-period";
        /** The value is within the current fiscal year.*/
        static ThisFiscalYear = "this-fiscal-year";
        /** The value is within the current month.*/
        static ThisMonth = "this-month";
        /** The value is within the current week.*/
        static ThisWeek = "this-week";
        /** 	The value is within the current year.*/
        static ThisYear = "this-year";
        /** The value equals today’s date.*/
        static Today = "today";
        /** The value equals tomorrow’s date.*/
        static Tomorrow = "tomorrow";
        /** Returns all child records below the referenced record in the hierarchy*/
        static Under = "under";
        /** The value equals yesterday’s date.*/
        static Yesterday = "yesterday";
    }
    @frozen
    export class FilterType {
        static And = "and";
        static Or = "or";
    }
}

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

/*
Hash Generator modified from
http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
*/

interface String {
    hashCode: () => string;
}

String.prototype.hashCode = function (): string {
    let hash = 0;
    if (this.length == 0) return hash.toString();
    for (let i = 0; i < this.length; i++) {
        let char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
}