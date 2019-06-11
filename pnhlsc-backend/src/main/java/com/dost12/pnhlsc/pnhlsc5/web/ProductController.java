package com.dost12.pnhlsc.pnhlsc5.web;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dost12.pnhlsc.pnhlsc5.domain.Product;
import com.dost12.pnhlsc.pnhlsc5.service.ProductService;

@RestController
@RequestMapping("/api/product")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/all")
    public Iterable<Product> getAllProducts(){
        return productService.findAll();
    }
    
/*    @PostMapping("")
    public ResponseEntity<?> addPTToBoard(@Valid @RequestBody Product product, BindingResult result){

        if(result.hasErrors()){
            Map<String, String> errorMap = new HashMap<>();

            for(FieldError error: result.getFieldErrors()){
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        Product productNw = productService.saveOrUpdateProduct(product);

        return new ResponseEntity<Product>(productNw, HttpStatus.CREATED);
    }*/



/*    @GetMapping("/{product_id}")
    public ResponseEntity<?> getPTById(@PathVariable Long product_id){
        Product product = productService.findById(product_id);
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @DeleteMapping("/{product_id}")
    public ResponseEntity<?> deleteProjectTask(@PathVariable Long product_id){
        productService.delete(product_id);

        return new ResponseEntity<String>("Product Task deleted", HttpStatus.OK);
    }*/

}
