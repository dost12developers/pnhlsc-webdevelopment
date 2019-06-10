package com.dost12.halalscience.web;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import com.dost12.halalscience.domain.Product;
import com.dost12.halalscience.domain.ProjectTask;
import com.dost12.halalscience.service.ProductService;
import com.dost12.halalscience.service.ProjectTaskService;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/product")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("")
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
    }

    @GetMapping("/all")
    public Iterable<Product> getAllProducts(){
        return productService.findAll();
    }

    @GetMapping("/{product_id}")
    public ResponseEntity<?> getPTById(@PathVariable Long product_id){
        Product product = productService.findById(product_id);
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @DeleteMapping("/{product_id}")
    public ResponseEntity<?> deleteProjectTask(@PathVariable Long product_id){
        productService.delete(product_id);

        return new ResponseEntity<String>("Product Task deleted", HttpStatus.OK);
    }

}
