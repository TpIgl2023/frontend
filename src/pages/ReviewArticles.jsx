import React, { useState } from "react";
import NavArticles from "../components/navbars/NavArticles";
import FooterSigned from "../components/footers/FooterSigned";
import UserTypes from "../constants/enums";
import ReviewPopup from "../components/ReviewPopup";
import ReviewArticlePopUp from "../components/ReviewArticlePopUp.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { GATEWAY_URL } from "../env.js";
import { ColorRing } from "react-loader-spinner";
import { setRef } from "@mui/material";
import { TERipple } from "tw-elements-react";
import objectHash from "object-hash";
import { useNavigate } from "react-router-dom";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button";

let dummyArticle = {
  key: true,
  id: 12,
  Title:
    "A Prototype Implementation of an Orthographic Software Modeling Environment",
  pdfUrl:
    "https://drive.google.com/uc?id=1-d1NzT4qEoGhkyXUupDden4eznEln9eW&export=download",
  Summary:
    "Orthographic Software Modeling (OSM) is a view-centric software engineering approach that aims to leverage the orthographic projection metaphor used in the visualization of physical objects to visualize software systems. Although the general concept of OSM does not prescribe specific sets of views, a concrete OSM environment has to be specific about the particular views to be used in a particular project. At the University of Mannheim we are developing a prototype OSM environment, nAOMi, that supports the views defined by the KobrA 2.0 method, a version of KobrA adapted for OSM. In this paper we provide an overview of the KobrA 2.0 metamodel underpinning nAOMi and give a small example of its use to model a software system.",
  Authors: [
    "Atkinson Colin",
    "Stoll Dietmar",
    "Tunjic Christian",
    "Robin Jacques",
  ],
  institutions: [
    "Universidade Federal de Pernambuco, N/A, Brasil",
    "University of Mannheim, N/A, Germany",
  ],
  KeyWords: [
    "D.1.7 [Programming Techniques]: Visual Programming",
    "D.2.2 [Design Tools and Techniques]: Computer-aided software engineering (CASE)",
    "D.2.6 [Software Engineering]: Programming Environments-Graphical environments Orthographic Software Modeling, View-based Modeling KobrA2::SUM::Constraint::Behavioral KobrA2::SUM::Constraint::Structural KobrA2::SUM::Constraint KobrA2::SUM::Constraint::Common KobrA2::SUM::Behavior::ProtocolStateMachines KobrA2::SUM::Behavior::Common KobrA2::SUM::Behavior::Activities KobrA2::SUM::Behavior::Actions KobrA2::SUM::Behavior KobrA2::SUM::Structure::Classes KobrA2::SUM::Structure::Types KobrA2::SUM::Structure::Instances KobrA2::SUM::Structure::Elements KobrA2::SUM::Structure KobrA2::SUM::Constraint::OclExpressions",
  ],
  text: 'INTRODUCTION\nOrthographic Software Modeling (OSM) is based on three fundamental hypotheses -(a) that it is feasible to integrate the many different kinds of artifacts used in contemporary software engineering methods within a single coherent methodology in which they are treated as views, (b) that it is feasible to create an efficient and scalable way of supporting these views by generating them dynamically, on-the-fly, from a Single Underlying Model (SUM) using model-based transformations and (c) that it is feasible to provide an intuitive metaphor for navigating around these many views by adapting the orthographic projection technique underpinning the CAD tools used in other engineering disciplines. As shown in Figure , the main advantages of using the idea of orthographic projection to define the views used to visualize and described a system are that they (a) can be organized according to a simple and easy-to-understand metaphor and (b) collectively represent all the properties of a system with minimal overlap and redundancy. In practice this translates into a set of "dimensions", each containing well defined choices (or so called "dimension elements") that can be used to select individuals views.\nAs shown in Figure , the main advantage of making the artifacts used to describe a software system views of a SUM is that the number of pairwise coherence relationships that have to be maintained is reduced and new views can be introduced by simply defining their relationship to the SUM. Moreover, the importance of this advantage grows quickly as the size of the system and the complexity of the deployed development methodology increase. Another important advantage is that the dominance of one particular kind of view over the development process (e.g. code) at the expense of other kinds of views (e.g. graphical models) is reduced so that any appropriate type of views can be used to enrich the underlying description of the system, depending on the needs and skills of the stakeholder involved. This makes it possible to subsume all view types under the same, overarch-SUM SUM / View Centric Environment Artifact / Tools Centric Environment ing development process and methodology (e.g. agile-driven, focusing on small development cycles, or model-driven development, based on transformations between abstraction levels). Although the details of how the views are created from the SUM and how the SUM is updated from the views are not central to the approach, a natural implementation is to use the visualization and transformation technologies offered by model driven software engineering (MDSE).\nTo explore the validity of these hypotheses at the University of Mannheim we have been developing a prototype OSM modeling environment based on an enhanced version of the KobrA method for model-driven, component-oriented development, KobrA 2.0 . This was chosen as a basis for the prototype, known as the Open, Adaptable, Orthographic Modeling Environment (nAOMi)  because its views were designed with the precise goals of being (a) genuine projections of a subject containing carefully selected subsets of information about that subject, (b) minimalistic in the sense that they should overlap to the smallest extent possible and contain the minimum necessary models elements, and (c) selectable via a set of independent "dimensions" which reflect different fundamental concerns of development (i.e. abstraction levels, composition or variants). In other words, KobrA already provided one of the "most orthogonal" sets of views for visualizing software systems of any contemporary method. More details about the actual views and dimensions defined in KobrA are presented in the following sections. More information on OSM can be found in  and .\nnAOMi is implemented as an Eclipse plugin using the Eclipse Modeling Framework (EMF) as the underlying modeling platform and UML 2.0 tools  to generate and edit views. The KobrA 2.0 metamodel on which the current version of nAOMi is based is a specialization of the UML metamodel composed of three separate packages -one for the SUM, one for the views and one for the transformations (Figure ). The UML was chosen as the base language because of its maturity and widespread acceptance, making the environment usable to the largest possible body of developers. UML elements not needed in KobrA 2.0 are excluded using OCL constraints while new elements or properties are introduced by specializing existing elements.\nThe unique contribution of this paper is to elaborate on the structure of the KobrA 2.0 metamodel and how it is used to drive nAOMi. The three following sections each focus on one of the three main components of the metamodel -the SUM, the views and the transformations . This is followed by a brief overview of the OSM navigation paradigm in Section 5 before a small example of the approach is presented in Section 6. Section 7 then concludes the paper with related and future work.\nSUM PACKAGE\nFigure  depicts the internal structure of the SUM package which is based on the UML metamodel. There are three main subpackages, two containing the structural and behavioral constructs respectively, and one containing the constraints that ensure that the metaclasses are used according to the KobrA conventions and rules.\nThe Classes subpackage of the Structure package contains some of the most fundamental elements of the KobrA metamodel, such as Class and ComponentClass. The internal structure of this package is illustrated in Figure . Com-ponentClass represents objects with complex and reusable behaviors, while Class captures simple "data type" objects that have only very simple or non-reusable behaviors. The modeler has to decide whether it is necessary to model a specific part of the system as a ComponentClass and include state charts and activity diagrams, or whether it is sufficient to use a Class (which is limited to using OCL constraints).\nComponentClass inherits (indirectly via Class) from Communications so it also has the isActive attribute. This makes it possible to model whether its instances are active or passive. Active objects, which can be used to model threads and processes  p. 438), start to execute their behavior as soon as they are created and perform operations spontaneously.\nA ComponentClass may exhibit complex behavior. In Ko-brA, this behavior may be specified in the form of UML State Diagrams (defining acceptable operation invocation sequences), and in the form of Activities (defining algorithms of operations). UML Interaction elements (in sequence diagrams) can be derived from the activity elements and thus are not included in the SUM. As KobrA aims to facilitate automatic checking of allowed sequences of operation calls, Protocol State Machines are supported instead of general state machines. Since the latter include a large variety of elements not needed for specifying acceptable operation se-quences or automatic checking, OCL constraints are used to prohibit the use of unwanted features. For example, since KobrA has no concept of roles for components, the use of role also needs to be prohibited. The part association refers to owned properties of components whose attribute isComposite is true. As KobrA uses associations like nests and creates for components, part, required and provided are not needed. Connectors (i.e. delegation and assembly) are not used in KobrA either so ownedConnector is excluded.\nVIEWS PACKAGE\nThe structure of the Views package is illustrated in Figure . Again, since most of the views defined in KobrA 2.0 are based on UML diagrams, the view metamodels have similar elements to the SUM metamodel. The big difference to the SUM is that there are no restrictions on the use of the view metamodel elements. For instance, views for a particular purpose such as supporting model checkers can be supported by adding elements unrelated to the UML.\nThe substructure of the Views package reflects the types and organization of the KobrA views according to the view "dimensions" supported in nAOMi (cf. example in . At the top level, the Views package is thus decomposed into the Specification and Realization options of the encapsulation dimension. These, in turn are both decomposed into the Structural, Behavioral and Operational options of the Projection dimension. Finally, with the exception of the behavioral option, these are also all subdivided into the Service and Type options of the granularity dimension. This dimension, with its two options, is an addition to the original version of KobrA.\nThe Service view shows the direct, publicly visible relationships of the subject ComponentClass to other Compo-nentClasses, while the Type view shows the publicly visible relationships of the subject to simple Classes. As with the SUM, constraints have been defined to control what can go into each view and when they are well formed. For every view, a constraint enumerates all allowed elements (not shown in this paper).\nIn the following, some of the other constraints for the Service view are elaborated. Since this view is a black-box view, the internals of ComponentClasses (nestedClassifier ) are not shown.\ncontext ComponentClass --no nested classifiers , no protocol inv : nestedClassifier -> union ( protocol ) -> isEmpty () Classes are only allowed if they are generalizations of Com-ponentClasses, (or any of its superclasses, since a Compo-nentClass may inherit from a class as shown in the constraints with context Class. The following invariants ensure that only publicly visible attributes and operations are in this view, for both classes and ComponentClasses (which inherit from Class). Only operation signatures are shown in this view, so pre-, post-and bodyconditions, as well as activities are omitted, which is reflected in the last constraint.\ncontext Operation --only the signature of the Operation is shown , not its behavior ( role name " method " refers to the Activities of the operation ) , or dependencies inv : method -> union ( precondition ) -> union ( body ) -> union ( postcondition ) -> isEmpty ()\nTRANSFORMATIONS PACKAGE\nThe package AllViews provides the foundation for specifying the transformations between the SUM and the views in both directions. Part of the package\'s contents are shown in Figure . The Abstraction concept (which is in fact a dependency reused from the UML but with additional constraints) plays the key role in relating elements from the SUM to elements of a view. Abstraction is actually mapped to ExpressionInOcl. When appearing in transformations, the equals sign links elements in the SUM to the respective elements in the view, and vice versa. For instance, equality of the general meta-association of a Generalization in a transformation invariant means that, when following general, there must be an element in the SUM and in the view for which similar transformation expressions are specified.\nIn the case of KobrA 2.0, which has many projections that just select a subset of elements using one-to-one abstractions, this allows concise declarative TransformationExpressions. Together with the view constraints, a CASE tool can be implemented which uses a transformation language of the implementor\'s choice, for instance the Atlas Transformation Language (ATL)  or QVT . The role names se and ve are short for SumElement and ViewElement, respectively. These roles subset the client and supplier roles from the UML. SUM elements are translated into UML elements with stereotypes, so that the views are easy to manage for developers familiar with the UML. The bidirectional mappings between stereotyped view elements and non-stereotyped SUM elements are expressed in the constraints of the Association-Abstraction, a subclass of the Abstraction from the AllViews package. This is also an example of a transformation which is reused in other views. Figure  shows the main elements involved in the transformation of the black box structural view for Component-Classes. The first transformation constraint is on the view and declares the starting point for the transformation. It states that the subject ComponentClass and its generalizations (using a SUM utility function, superClosure) are in the view.\nThe following transformation rules illustrate how to create the output (i.e. view) elements from the input (i.e. SUM) elements, such as the publicly visible attributes and operations of the ComponentClass and the acquired ComponentClasses. The first constraint for ComponentClassAbstraction states that references to potential general classes (and Component-Classes) of ComponentClasses are mirrored in the view. In addition, ComponentClasses will be shown with the corresponding stereotypes. The ComponentClass owns various types of associations, so in this view only the acquires associations are selected (whose transformation rules are covered in the common transformation packages).For classes and ComponentClasses, only publicly visible attributes and operations appear in the view. Class invariants are also copied. Classes that may appear in this view (e.g. as generalizations of ComponentClasses) may have a powertype (role name powertypeExtent) which will be displayed.\nThe last transformation statement copies the class references of operations. As with all views, the transformation rules, the common transformation statements (which also cover operations) and the view constraints serve as a specification for the implementation of a view. Individual CASE tools can use different implementation techniques as long as they conform to the semantics of these rules and constraints.  For the black box type view, only publicly visible attributes and operations of classes (as opposed to Compo-nentClasses) used by the subject can be seen. This is specified in the first rule which defines owned members of the view and thus serves as the starting point of the transformation. cbbTypes is a utility function defined in the SUM which computes the black box types by selecting the types of the subject\'s public attributes and parameter types of its public operations.\nClass invariants and potential powertypes and connections to the classes in this view are shown as well. There may also be Enumerations, for which the EnumerationLiterals are displayed.\nThe transformation rules for this view are almost the same as the realization transformation constraints from the package Transformation::Realization::Structural::Class::Type. The differences are the select(visibility=#public) statements for operations and attributes. s t r i n g I n S i g n a t u r e\nNAVIGATION\nMost of today\'s tools use some combination of trees to organize the content of models as well as the views used to visualize a software system or component. In an any environment incorporating a number of different tools there is invariably a large number of different trees storing a heterogeneous mix of artifacts including model elements (e.g. classes, instances, associations), diagrams (e.g. class diagrams, state diagrams) and other artifact types (source code, XML files, configuration files ). To work with all the views in a traditional development environment, therefore, engineers typically have to learn about the organization structures of all the incorporated tools.\nIn contrast to conventional paradigms for organizing and navigating the many views used to visualize a system, OSM employs the metaphor of a multi-dimensional cube. More specifically, as illustrated in Figure , OSM regards dimension of the underlying methodology as representing a different dimension of the cube, and each independently variable aspect of that dimension is a selectable dimension element. Selecting a view thus simply corresponds to selecting a single cell within the cube. In general, three types of dimensions are supported: static dimensions in which the number of selectable elements (i.e. coordinates) is fixed, dynamic dimensions in which the number of elements is dynamic (i.e. derived from the SUM), and mixed dimensions which have both static and dynamic elements.\nTo support the OSM dimension based navigation metaphor for KobrA, we defined the seven dimensions indicated on the left hand side of Figure  which is a sceenshot of nAOMI. The Abstraction dimension (not expanded here), which has three static dimension elements, PIM (platform independent model), PSM (platform specific model) and Code, captures the model-driven development concern of KobrA. The version dimension captures the state of the modeled system at specific points in time. The Component dimension, which has dynamic dimension elements defined by instances of the class ComponentClass in the SUM, captures the componentbased development concern of KobrA.\nThe Encapsulation dimension, which has two fixed elements, supports the distinction between Specification (black box) and Realization (white box) views of components, while the Projection dimension with the fixed elements Structural, Operational and Behavioral covers the different information types. The Granularity dimension provides a finer grained distinction between views describing the types used by components (Type granularity) and views describing the required and provided interfaces (Service granularity). The Operation dimension allows a selection of individual operations.\nIn the ideal case, when all views are truly orthogonal, the choices that can be made in each dimensions are completely independent. However, this is very difficult to achieve in software engineering. The approach still works if the views are not completely orthogonal, but dependencies then occur between different choices in different dimensions, so that the decisions made in one dimensions may affect choices possible in another dimension. This is best handled by giving dimensions a precedence ranking determined by the order in which they appear (the top being the highest). When an element in a dimension is selected, the tool automatically makes default selections for dimensions of lower precedence (i.e. dimensions lower down) and disables selections that would navigate to cells (i.e. views) which are not (yet) defined by the method at hand.\nSHOPPING CART EXAMPLE\nTo show how a software system can be specified using nAOMi, this section presents a case study based on a shopping cart system. A ShoppingCart component collects and manages the products selected by users and supports payment via a credit card. Figure  illustrates a structural view of the component.\nIn the dimension navigator on the left hand side, PIM was chosen for the "Abstraction Level" (not expanded in the screenshot). The second dimension is the state of the software system at a certain point in time. The picture shows that the latest available version was chosen. As with every choice in a dimension, it may influence the options in lower ranked dimensions. The component under consideration is the ShoppingCart, for which a black box view is selected in the next dimension. After the user selects the structural projection option and the service level granularity, the tool automatically chooses the option for all operations in the last dimension, as there is no editor registered for the other options.\nThe component under development is presented with the stereotype subject and its relationship to other components and classes is shown in the view, which corresponds to a cell of the multi-dimensional navigation cube, and is generated on-the-fly from the SUM when it is selected. The classes Product and CreditCard can be used as data types in the operations of the component.\nFigure  illustrates the operational view in which an operation can be formalized using pre-and postconditions. The precondition corresponds to the assumes clause in and the postcondition corresponds to the result clause. As in the UML, the precondition of an operation must be true when the operation is invoked and the postcondition must be true when the operation is finished. The operation addProduct in Figure  must be in state CollectingProducts or Empty when invoked. This is also visible in the behavioral view, since there are only two transitions with the operation ad-dProduct. Both leads to the state CollectingProducts which is also a postcondition of the operation. The second postcondition is that the cost attribute of the component must be increased by the price of the added product. The pre-and postcondition can be expressed using the OCL. The properties of the component, states and operation parameters can be used to formalise the constraints like as in this example.\nFigure  shows the publicly visible behaviour of the Shop-pingCart component with states and transitions. The conditional transitions map to operations of the component. Like every view, this view is also synchronized with the SUM so that it is guaranteed that its operations, states and properties are consistent with those in the structural view. Although the operational view seems to be similar to the behavioral view because of the overlapping information within them, there are significant differences. The focus of the operational view is on a precise formal definition of an operation of a component. The operations can be enriched by preand postconditions which can be defined using complex OCL statements, that formalize the complete behavior of an operation. The additional information in the OCL statements can be used for code generation and documentation.\nCONCLUSION\nAt the beginning of the paper we identified three fundamental hypothesis upon which the notion of OSM is based -(a) that it is feasible to integrate the many different kinds of artifacts used in contemporary software engineering methods within a single coherent methodology in which they are treated as views, (b) that it is feasible to create an efficient and scalable way of supporting these views by generating them dynamically, on-the-fly, from a Single Underlying Model (SUM) using model-based transformations and (c) that it is feasible to provide an intuitive metaphor for navigating around these many views by adapting the orthographic projection technique underpinning the CAD tools used in other engineering disciplines.\nThe prototype tool, nAOMi, described in this paper represents the first step towards demonstrating the validity of these hypotheses and showing that OSM is a viable approach to software engineering. Of the three hypotheses, (a) and (c) are most convincingly demonstrated by the prototype, since it shows that it is indeed possible to support all the views of the KobrA method within a single navigation metaphor. The prototype tool does not demonstrate the validity of hypothesis (b) to the same extent as the others due to its small size. Although it demonstrates the feasibility of generating views from the SUM and vice-versa, the question of whether such an approach scales up to large environments is still open.\nAlthough nOAMi is the only tool developed with the specific aim of supporting KobrA-based OSM, several other tools and methods have similar properties or aims. For example, Glinz et al.  describe a tool with a fisheye zooming algorithm which lets the user view a model with varying amounts of detail depending on the context. It has to be investigated whether it is possible to combine the fisheye zooming concept with the dimension-based navigation paradigm. While the KobrA 2.0 implementation of nAOMi heavily uses UML diagrams for developers, Glinz et al. use custom diagram types, e.g. for structural and behavioral views.\nAn approach which also emphasizes the description of formal consistency rules (correspondences) between views is RM-ODP . However, this approach does not explicitly mention the notion of a SUM and thus implies that consistency rules should be defined in a pairwise fashion between individual pairs of views. ArchiMate , which complements TOGAF , is an enterprise architecture modeling language which offers two orthogonal "dimensions" for modeling, (business, architecture, and technology) layers and (informational, behavioral and structural ) aspects and also suggests two more dimensions, purpose and abstraction level. However, as many of these views span multiple choices of a single "dimension", the intuitive dimension-based navigation metaphor of OSM can not be easily applied. There are also more general approaches for view-based modeling but they are less specific in terms of consistency rules between views and provide little guidance on how to manage and navigate views, for example the Zachman Framework .\nRegarding the practical use of OSM environments in the future, the biggest challenge is developing appropriate SUM metamodels which can accommodate all the types of views and services that software engineers are accustomed to today. For this first prototypical SUM-based environment supporting the OSM approach we had a method at our disposal (KobrA) that already defined a full set of orthogonal UMLbased views. This allowed us to model the required SUM and view metamodels by simply adapting the UML metamodels, removing and adding model elements as needed.\nIn doing so we were able to manually ensure that the metamodels fulfilled the two core requirements of SUM-based environments -(1) being minimalistic and (2) redundancy free. If SUM-based software engineering environments are to take off, and to be introduced into existing, heterogeneous environments, more sophisticated ways of integrating existing metamodels into a single unified metamodel will be required.\n',
  references: [
    "N/A ",
    "Component-Based Product Line Engineering with UML ",
    "Evaluation of Novel Approaches to Software Engineering Authors: Atkinson C, Stoll D, Bostan P",
    "Proceedings of 15th IEEE EDOC Conference Workshops (EDOCW) Authors: Atkinson C, Stoll D, Tunjic C",
    "Eclipse Foundation. UML2Tools ",
    "The Reference Model of Open Distributed Processing ",
    "Proceedings of the Thirteenth IEEE International EDOC Conference Authors: Jose J I J, Romero Raul, Vallecillo A",
    "Enterprise Architecture at Work ",
    "OMG Unified Modeling Language (OMG UML), Superstructure, V2.1.2 ",
    "Meta Object Facility (MOF) 2.0 Query/View/Transformation ",
    "Proceedings of the 2003 International Conference on Software Engineering Authors: Seybold C, Glinz M, Meier S, Merlo-Schett N",
    "The Atlas Transformation Language (ATL). Official Website ",
    "TOGAF Version 9 -The Open Group Architecture Framework ",
    "nAOMi -opeN, Adaptable, Orthographic Modeling EnvIronment ",
    "The Zachman Framework: A Primer for Enterprise Engineering and Manufacturing ",
  ],
  publishDate: "",
};

var articleToReview = dummyArticle;

export default function Article() {
  const navigate = useNavigate();
  const { url } = useParams();
  const [decodedUrl, setDecodedUrl] = useState("");
  const [finishedFetching, setFinishedFetching] = useState(false);
  const [finishedLoading, setFinishedLoading] = useState(false);
  const [Articles, setArticles] = useState([]);
  const [Refresh, setRefresh] = useState(false);
  const [Progress, setProgress] = useState("0%");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [ViewedArticle, setViewedArticle] = useState(dummyArticle);

  let id = 0;

  let firstFetch = false;

  function parseArticle(res) {
    if (res == null || res == undefined) {
      return null;
    }
    // Turn an article from PDF handler to article
    let article = {};
    article.id = id;
    id++;
    article.Title = res.title;
    article.pdfUrl = res.URL;
    article.Summary = res.abstract;
    article.Authors = res.authors;
    article.institutions = res.institutions;
    article.KeyWords = res.keywords;
    article.text = res.text;
    article.references = res.bibliography;
    article.publishDate = res.publishingDate;
    console.log(article);
    return article;
  }

  function updateProgressBar(nbArticlesUpdates, nbArticles) {
    let newProgress = (nbArticlesUpdates / nbArticles) * 100;
    setProgress(newProgress + "%");
  }

  function unparseArticle(article) {
    if (article == null || article == undefined) {
      return null;
    }
    // Turn an article from PDF handler to article
    let res = {};
    res.title = article.Title || "";
    res.URL = article.pdfUrl || "";
    res.resume = article.Summary || "";
    res.authors = article.Authors || [];
    res.institutions = article.institutions || [];
    res.keywords = article.KeyWords || [];
    res.text = article.text || "";
    res.references = article.references || [];
    res.publishDate = article.publishDate || "1677-09-21";
    return res;
  }

  function changeViewedArticle(article) {
    // let myArticle = JSON.parse(JSON.stringify(article));
    console.log("Change the view");
    console.log("Article: " + JSON.stringify(article));
    setViewedArticle(article);
    console.log("Viewed Article");
    console.log(ViewedArticle);
    // setRefresh(!Refresh);
  }

  function saveArticles() {
    console.log(Articles);
    setUploading(true);
    let articles = Articles;
    let numberUpdatedArticles = 0;
    for (let i = 0; i < articles.length; i++) {
      let article = articles[i];
      let res = unparseArticle(article);
      console.log(res);
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
      axios
        .post(`${GATEWAY_URL}/articles`, res)
        .then((res) => {
          console.log(res);
          numberUpdatedArticles++;
          console.log("Articles length: " + articles.length);
          if (numberUpdatedArticles == articles.length) {
            alert("All articles updated successfully !");
            navigate("/ajouter");
          }
        })
        .catch((err) => {
          console.log(err);
          numberUpdatedArticles++;
        });
    }
  }

  useEffect(() => {
    setDecodedUrl(decodeURIComponent(url));
  }, [url]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      if (finishedFetching == false) {
        const res = await fetchData();
        console.log("it's loading");
        if (res != null) {
          setFinishedFetching(true);
          console.log("it's loaded");
          if (res.sourceType == "fileLink") {
            let article = parseArticle(res);
            let articlesArray = [article];
            setProgress("100%");
            setArticles(articlesArray);
            setFinishedLoading(true);
          } else {
            let finishedDownloads = 0;
            let downloadLinks = res.downloadLinks;
            if (downloadLinks == null || downloadLinks.length == 0) {
              setFinishedLoading(true);
              return;
            }
            console.log(downloadLinks);
            let articlesArray = [];
            let secondRes;
            for (let i = 0; i < downloadLinks.length; i++) {
              console.log("Starting Updating article " + i);

              const token = localStorage.getItem("token");
              axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${token}`;
              axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
              axios
                .post(`${GATEWAY_URL}/admin/extract`, {
                  URL: downloadLinks[i],
                })
                .then((res) => {
                  console.log(res.data);
                  console.log("Updating article " + i);
                  let article = parseArticle(res.data);
                  articlesArray.push(article);

                  let newArray = [...articlesArray];

                  setArticles(newArray);
                  setRefresh(!Refresh);
                  finishedDownloads++;
                  updateProgressBar(finishedDownloads, downloadLinks.length);
                  if (finishedDownloads == downloadLinks.length) {
                    setFinishedLoading(true);
                  }
                })
                .catch((err) => {
                  console.log(err);
                  finishedDownloads++;
                  if (finishedDownloads == downloadLinks.length) {
                    setFinishedLoading(true);
                  }
                });
            }
          }
        }
      }
    };
    fetchDataAsync();
  }, [decodedUrl]);

  async function fetchData() {
    if (firstFetch == false) {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
      const res = await axios.post(`${GATEWAY_URL}/admin/extract`, {
        URL: decodedUrl,
      });
      if (res.data.success == true) {
        return res.data;
      }
      return null;
    }
  }

  function handleSubmitArticle(article) {
    // Replace the article with the same id
    let newArticles = [...Articles];
    let index = newArticles.findIndex((a) => a.id === article.id);
    newArticles[index] = article;
    setArticles(newArticles);
  }

  function handleDeleteArticle(article) {
    // delete the article with the same id
    const newArticles = Articles.filter((a) => a.id !== article.id);
    setViewedArticle(dummyArticle);
    setArticles(newArticles);
  }

  const UserType = UserTypes.MODERATOR;

  async function onModifyClicked(article) {
    // articleToReview = article;
    setViewedArticle(article);
    setPopupOpen(true);
  }

  console.log("article to modify: " + JSON.stringify(articleToReview));
  return (
    <div>
      <NavArticles />
      {Articles.length > 0 && (
        <ReviewArticlePopUp
          key={ViewedArticle.id}
          isOpen={isPopupOpen}
          handleClose={() => setPopupOpen(false)}
          article={ViewedArticle}
          handleSubmit={handleSubmitArticle}
        />
      )}
      <div className="w-[80%] mx-auto flex justify-center sm:justify-end pt-[50px] min-h-[80%]"></div>
      <div className="min-h-[500px] justify-center w-full">
        {Articles.map((Article) => (
          <ReviewPopup
            key={objectHash(Article)}
            Article={Article}
            UserType={UserType}
            onModifyClicked={onModifyClicked}
            onDeleteClicked={handleDeleteArticle}
          />
        ))}
        {!finishedLoading && (
          <div className="w-full flex justify-center align-middle">
            <ColorRing
              visible={true}
              height="120"
              width="120"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        )}
        {finishedLoading && !uploading && (
          <div className="w-full flex justify-center align-middle">
            <TERipple rippleColor="light">
              <button
                type="button"
                className="inline-block rounded-2xl bg-[#1b76ff] font-semibold py-4 mb-20 px-[50px] sm:px-[100px] text-xl uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                onClick={saveArticles}
              >
                Submit
              </button>
            </TERipple>
          </div>
        )}
        {uploading && (
          <div className="w-full flex justify-center align-middle">
            <ColorRing
              visible={true}
              height="120"
              width="120"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        )}
      </div>
      <div className="w-full bg-neutral-200 dark:bg-neutral-600">
        <div
          className="bg-[#1b76ff] p-1 text-center text-xs font-medium leading-none text-primary-100"
          style={{ width: Progress }}
        ></div>
      </div>
      <FooterSigned />
    </div>
  );
}
