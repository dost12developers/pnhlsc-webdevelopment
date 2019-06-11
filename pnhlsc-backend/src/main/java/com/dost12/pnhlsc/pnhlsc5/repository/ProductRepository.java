package com.dost12.pnhlsc.pnhlsc5.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dost12.pnhlsc.pnhlsc5.domain.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

    Product getById(Long id);
}
